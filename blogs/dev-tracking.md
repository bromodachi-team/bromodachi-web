Hi, I'm **Kultie**, a programmer from the **Bromodachi Team**.  

I've been in the game industry for about **six years**, mainly working with **Unity** and **C#**.
Today, Ill share my **implementation and mindset** when building a game tracking system  how to make it flexible, decoupled, and easy to maintain.

---
## Why I Wrote This Article
Game tracking is an essential part of modern game programming.  
Every game needs a reliable way to **keep track of in-game events**  to understand **how players interact**, **what's working**, and **what needs improvement**.

Over the years, I've worked with many programmers and codebases.
To my surprise, there are *so many different approaches* to implementing tracking.
So, in this post, I'll share **my own approach**  and I hope you'll share yours too, so we can learn from each other!

> Note:
> I'll assume readers have some basic knowledge of analytics tools like **Firebase**, **GA4**, or **Appsflyer**
> Well skip the setup part and dive straight into **code and architecture**.
---  

## The Primitive Way
I've seen codebases where tracking calls are placed *directly* inside gameplay functions: 

```csharp

void DoStuff()
{
    // Function body
    FirebaseAnalytics.Parameter[] firebaseParams = new();
    // Create params here
    FirebaseAnalytics.LogEvent("stuff", firebaseParams);
    Dictionary<string, object> afParams = new();
    Appsflyer.Log("stuff", afParams);
}

```
This approach looks simple but is **extremely primitive**.
If you write code like this, Ill treat you as a *novice programmer* implementing tracking for the first time.

Lets break down why this is a bad idea.
### 1. Dependencies Everywhere
- If you **remove** an SDK, you must manually delete every tracking call.  
- If you **add** a new SDK, you must modify every function again.  
- If an SDK **isnt initialized**, it may throw exceptions and **halt your game flow**.  

### 2. Bloated Function Logic  
- Each SDK has a different data input format. Embedding that directly inside gameplay code **pollutes your logic**.  
- Event names are often written as **magic strings**, which makes life miserable for your **Data Analytics team**.

These are small issues individually, but they add up  making your codebase **hard to maintain, debug, or scale**.  
A robust tracking system should be **modular, decoupled**, and **easy to extend**.

---
## My Design Goals
When designing my tracking system, I set these three goals:
1. The tracking system should **not create dependencies** in gameplay code.
2. Each SDK integration should **handle its own parameter mapping**.
3. I should be able to **add or remove SDKs quickly**, without rewriting logic.  

This is my approach  feel free to criticize or improve it!  
I'm always open to learning new ways to make systems cleaner and more flexible.

---
## Core Components
Here's what I need:

-  **Event Bus / Event Dispatcher** system (I currently use [Cysharp/R3](https://github.com/Cysharp/R3))
-  **Static class** for consistent event names
-  **Interface** to wrap each SDK and define a common tracking API
## The Event Dispatcher
In any game, regardless of style or framework, an **event dispatcher** is invaluable.
It decouples gameplay logic from external systems like tracking, achievements, or UI feedback.
So instead of this:
```csharp
void DoStuff()
{
    // gameplay logic
    FirebaseAnalytics.LogEvent("stuff", ...);
}
```
Youll do this:
```csharp
void DoStuff()
{
    // gameplay logic
    EventDispatcher.OnDoStuff(...);
}
```
Now, the tracking system simply **listens** to the event instead of being tightly bound to the gameplay function.

---
## Tracking Service Implementation
I usually implement my `TrackingSystem` as a **static class**, initialized automatically on startup.
Heres the structure:
```csharp
public static class TrackingService
{
    static List<ITrackingHandler> trackingHandlers;
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
    public static void Initialize()
    {
        InitializeHandlers();
        SubscribeToGlobalEvents();
    }
    static void InitializeHandlers()
    {
        trackingHandlers = new();
        trackingHandlers.Add(new FirebaseTrackHandler());
        trackingHandlers.Add(new AppsflyerTrackHandler());
    }  

    static void SubscribeToGlobalEvents()
    {
        EventDispatcher.OnDoStuff += SendDoStuff;
    }  

    static void SendDoStuff(Dictionary<string, object> parameters)
    {
        SendEvent(GameEvents.DoStuff, parameters);
    }  

    static void SendEvent(string eventName, Dictionary<string, object> parameters)
    {
        foreach (ITrackingHandler handler in trackingHandlers)
        {
            handler.SendEvent(eventName, parameters);
        }
    }
}
```
By using [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)] the initialization will be called after Awake() has been called, that should be after for Global events bus initialized

---
## The `ITrackingHandler` Interface
The `ITrackingHandler` is the **common interface** shared by all SDK integrations.
Each SDK implements this interface to handle initialization and parameter conversion.
This separation of concerns makes it easy to **add or remove** tracking SDKs without affecting the main code.  

For advanced use cases, I send tracking events **after a one-frame delay** to avoid SDK exceptions halting the call stack.  
This is optional, but I find it very reliable.
```csharp
public class FirebaseTrackHandler : ITrackingHandler
{
    public void SendEvent(string eventName, Dictionary<string, object> parameters)
    {
        CoroutineManager.DelayCall(() =>
        {
            FirebaseAnalytics.Send(eventName, GetParams(parameters));
        });
    }  

    private Parameter[] GetParams(Dictionary<string, object> parameters)
    {
        // Convert dictionary to Parameter array
    }
}

```
---  
## Summary
Heres what this architecture achieves:
-  **Event dispatcher** removes dependencies between gameplay and tracking.
-  **Interfaces** allow fast integration or removal of 3rd-party SDKs.
-  **Coroutines/threads** prevent uncaught SDK exceptions from halting execution. 

This setup is **clean**, **modular**, and **safe to evolve** as your game grows.

---
###  Final Thoughts
A robust tracking system isnt about writing more code
its about **decoupling**, **consistency**, and **long-term maintainability**.
If you have another approach or idea, Id love to hear it.  

Lets keep improving our craft together!