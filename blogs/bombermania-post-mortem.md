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
- Player can try again endlessly within the time limit.

### 2. Setting up bombs:
- Player drag bombs onto tiles within the level,
- The first placed bomb will start the chain of explosions - and will only be triggered after the player press the explode button.
- Placed bomb can be returned anytime by dragging the bomb and drop to the return zone
- Also, placed bomb can be re-arranged on to another tile within the level, as long as that tile is empty.
- Player do not have to place all provided bomb onto the level to trigger the explosion. The remaining bombs will be converted to coins as reward after the player win the level

### 3. Boosters:
- Player have 3 boosters, can be bought by coins, or gained by watching an advertisement
- 3 boosters are:
  - **Switch:** Change which bomb will explode first,
  - **Barrage:** Deals damage to random enemies, with the first damage dealt to a specific enemy,
  - **Destroy:** Destroy a specific target by choice.
 

