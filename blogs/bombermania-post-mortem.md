Hello - we’re Bromodachi; the developers behind Bombermania; and I’m Dat - the game designer of the team. In this post, we’ll discuss the game itself - what are the goods - the bads - and the uglies - about this game.

## About the game

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/gameplay.png)

Bombermania is a mobile puzzle game, with a simple goal - to eliminate all enemies on the board. And the tools to achieve that goal are bombs - which would explode in sequence, based on the first placed bomb that would start the chained explosion.<br>
To setup the chained explosion, you need to place the bombs onto the board by dragging, and manually press an explode button to set-off the explosion of the first bomb. If there’s any other bomb within the explosion range of the first bomb – that bomb would explode too, and will affect other bombs / enemies within its explosion range - and we have ourselves an explosion chain.<br><br>
Here are the visual representation of bombs in the game:
<br>
![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/bombs.png)
<br>
*From left to right: Cross bomb, Diagonal Bomb, Push Bomb*
<br>
<br>
And here are the enemies within the game:
<br>
![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/enemies.png)
<br>
*From left to right: Normal enemy, Armored enemy (1 HP and 2 HP), and enemies with bomb (cross bomb, or diagonal bomb)*
<br>
<br>
Also, some of the other special elements:
<br>
![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/special_elements.png)
<br>
*From left to right: Civilian, Explosive Keg, and Stack Explosive Keg*
<br>
<br>
The way these elements work are actually pretty simple:
<br>
- **Bombs:** They explode in 2 patterns: Cross ("+"), or diagonal (X); with the exception of Push bomb - as with its name, the bomb push anything within its explosive range away.
<br>
- **Enemies:** The main targets to eliminate within each level. They all have at least 1 HP; armored enemies will either have 2 or 3 HP, based on their armor. Meanwhile, enemies carrying bomb will explode upon interaction (being pushed at by something, or affected by any explosion from bombs / kegs / other enemy carrying bomb).
<br>
- **Kegs:** Simply put, explosive barrel; one explode in the radius of 1-tile from itself; the other will have larger blast radius upon being interacted by something else (pushed at, or explosion).
<br>
- **Civilian:** Just don't harm them, and you're fine.
<br>
<br>
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
<br>
<br>
And so, after being developed for ~1 month (and some additional time-consuming problems that we need to deal with in the first time self-publishing game), the game is available on Google Play.
<br>
We connected to Meta Ads, ran ad campaign in Brazil, and create a page on Facebook in hope for better advertising - and consider the page to be a stepping stone for advertising future games. Yet, we ran into some troubles.
<br>

## The situation we're in

### Advertising / Marketing

After a week of advertising in Brazil, we found that the game is pretty appealing to user - with two creatives, based on the chain explosion / chain reaction mechanic, and big explosions. Cost per Install (CPI) within Brazil is approximately $0.15 - $0.2, sometimes drop as low as $0.13. So, first hand conclusion is - the game art style is pretty good, appealing to the player; the chain explosion mechanic seems to attract players as well (while the bigger explosion creative didn't perform as well). But, that wouldn't be enough to consider this game as a potential hit on the mobile game market.
<br>
![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/ad_campaign_1_0_2.png)
<br>
*Game advertising results within the first week of ad campaign in Brazil*
<br>
<br>
### Performance, and first update
<br>
![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/drop_rate_1_0_2.png)
<br>
*Performance of the first version - 1.0.2 - drop rates, by level 1 (level 0) to level 11 (level 10) - as you can see, we lost 45% players right in the 1st level (level 0)*
<br>
The game's performance in the first few days was not good. Terrible, even - about **65% players in Brazil** lose at least 1 level, while they're not even passed level 10. Day 1 retention (RRD1) is very low - **12.5% on 2nd day, and 16.5% on 3rd day**; moreover, we lost about ~50% of players just after level 2 - which is a critical pain point. So, we figured - **first time user experience** (FTUE) is very bad, and the game seems to be - either incapable of introducing the main game mechanics to the player, or just too difficult for players to understand and interpret the game mechanics by themselves. From that conclusion, we made a quick patch to make the 5 first levels with the hope of improving FTUE.
<br>
<br>
![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/drop_rate_1_0_3.png)
<br>
*2nd version - 1.0.3 - not much better*
<br>
But sadly, the game's performance did not go up. After a few days of advertisement, **RRD1 even plummmeted down to 8.5%**, with indifferences in engagement time (less than 4 minutes, on average). Meanwhile, even though we experienced a slight drop of drop rate from the first level (level 0), the game still loses ~50% of players right after the 2nd level.At this point, a major and immediate update is critically needed - the game's performance show us that the player still don't understand how to actually play the game and how its mechanics work; with some live user feedback also prove some parts of the UI are confusing or misleading. Therefore, we enrolled some changes within the core gameplay in order to improve FTUE and RRD1.
<br>
<br>
### Second update:
<br>
First, we switched from three tries per levels into a time-limited gameplay (since, some players did commented that the three tries per levels needed to be explain explicitly - the current UI and rules made them misunderstood that they can freely planting bombs then trigger the explosion). The game now only requires player to eliminate all enemies on board, without reaching timelimit, nor killing any civilian.
<br>
Second - based on live users testing result, we determined that the game's design has violated a rule in UX design - a lack of "Undo" action for players, which is a major flaw. Why, you may ask - since there's an Undo booster; but, because it is a booster, so this function is locked behind game currency (or an ad) - meanwhile, the player still makes mistakes left and right and frustrated to no ends since there's no way to revert their mistake. So, 2 more things are implemented: Players can re-arrange bombs on the boards - bombs can be placed to another tile, as long as that tile is empty; also, player can drag planted bomb on the board back into the bomb section on screen to return it to its original stock. 
<br>
Third - we implemented a step-by-step onboarding process for level 1 - since the game's suggestion in the previous two version clearly did not work, and also made changes to the bombs' display and visual cue: red bombs will explode, black bombs don't; each bomb that would explode will display its explosion range to indicate which other elements will be affected by the explosions.
<br>
Fourth - we remove the interstial ads and banner ads, in a (slightly) desperate attempt to improve FTUE, and made a few minor UI changes in according to the above game updates.


