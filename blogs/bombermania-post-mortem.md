Hello - we’re Bromodachi; the developers behind Bombermania; and I’m Dat - the game designer of the team. Today, we’ll discuss the game itself - what are the goods, the bad, and the ugly, about this game.

## About the game

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/Gameplay.png)

Bombermania is a mobile puzzle game, with a simple goal - to eliminate all enemies on the board. And the tools to achieve that goal are bombs - which would explode in sequence, based on the first placed bomb that would start the chained explosion.


To setup the chained explosion, you need to place the bombs onto the board by dragging, and manually press an explode button to set-off the explosion of the first bomb. If there’s any other bomb within the explosion range of the first bomb – that bomb would explode too, and will affect other bombs / enemies within its explosion range - and we have ourselves an explosion chain.


Here are the visual representation of bombs in the game:


![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/Bombs.png)


*From left to right: Cross bomb, Diagonal Bomb, Push Bomb*


And here are the enemies within the game:

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/Enemies.png)


*From left to right: Normal enemy, Armored enemy (1 HP and 2 HP), and enemies with bomb (cross bomb, or diagonal bomb)*


Also, some of the other special elements:


![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/Special%20Elements.png)


*From left to right: Civilian, Explosive Keg, and Stack Explosive Keg*



The way these elements work are actually pretty simple:


- **Bombs:** They explode in 2 patterns: Cross ("+"), or diagonal (X); with the exception of Push bomb - as with its name, the bomb push anything within its explosive range away.

  
- **Enemies:** The main targets to eliminate within each level. They all have at least 1 HP; armored enemies will either have 2 or 3 HP, based on their armor. Meanwhile, enemies carrying bomb will explode upon interaction (being pushed at by something, or affected by any explosion from bombs / kegs / other enemy carrying bomb).

  
- **Kegs:** Simply put, explosive barrel; one explode in the radius of 1-tile from itself; the other will have larger blast radius upon being interacted by something else (pushed at, or explosion).


- **Civilian:** Just don't harm them, and you're fine.



With the elements established above, we have the gameplay rules in specific:
### 1. The winning / losing condition:
- The player must **eliminate all enemies within time limit** of each level,
- Any civilian harmed **would not be tolerated,**
- Player can try to trigger the explosion chain three times without any time limit.

### 2. Setting up bombs:
- Player drag bombs onto tiles within the level,
- The first placed bomb will start the chain of explosions - and will only be triggered after the player press the explode button.
- Placed bomb can not be returned, nor re-arranged to another tiles.
- Also, placed bomb can be re-arranged on to another tile within the level, as long as that tile is empty.
- Player do not have to place all provided bomb onto the level to trigger the explosion. The remaining bombs will be converted to coins as reward after the player win the level

### 3. Boosters:
- Player have 4 different types of booster, can be bought by coins, or gained by watching an advertisement
- The 4 types of boosters are:
  - **Undo:** Return a placed bomb on the level. If the returned bomb is the first bomb to explode, then another bomb will be chosen to explode first randomly.
  - **Switch:** Change which bomb will explode first,
  - **Barrage:** Deals damage to random enemies, with the first damage dealt to a specific enemy,
  - **Destroy:** Destroy a specific target by choice.
 


And so, after being developed for ~1 month (and some additional time-consuming problems that we need to deal with in the first time self-publishing game), the game is available on Google Play.


We connected to Meta Ads, ran ad campaign in Brazil, and create a page on Facebook in hope for better advertising - and consider the page to be a stepping stone for advertising future games. Yet, we ran into some troubles.


## The situation we're in

### Advertising / Marketing

After a week of advertising in Brazil, we found that the game is pretty appealing to user - with two creatives, based on the chain explosion / chain reaction mechanic, and big explosions. Cost per Install (CPI) within Brazil is approximately $0.15 - $0.2, sometimes drop as low as $0.13. So, first hand conclusion is - the game art style is pretty good, appealing to the player; the chain explosion mechanic seems to attract players as well (while the bigger explosion creative didn't perform as well). But, that wouldn't be enough to consider this game as a potential hit on the mobile game market.


![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/ResultsA.png)

*Game advertising results within the first week of ad campaign in Brazil*


The game's performance in the first few days was not good. Terrible, even - about 65% players in Brazil lose at least 1 level, while they're not even passed level 10. Day 1 retention (RRD1) is very low - 12.5% on 2nd day, and 16.5% on 3rd day. So, we figured - first time user experience (FTUE) is very bad, and seems to be incapable of introducing the main game mechanics to the player. From that conclusion, we made a quick patch to make the 5 first levels with the hope of improving FTUE.


![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/drop_rate.png)


*Drop rate of 10 first levels - as you can see, we lost 45% players right in the 1st level (level 0)*


