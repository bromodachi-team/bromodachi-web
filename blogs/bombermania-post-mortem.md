<p align="justify">
  Hello - we’re <b>Bromodachi</b>; the developers behind Bombermania; and I’m Dat - the game designer of the team. In this post, we’ll discuss the game itself - what are the goods - the bads - and the uglies - about this game. 
</p>

<h2>About the game</h2>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/gameplay.png)

<p align="justify">
  Bombermania is a mobile puzzle game, with a simple goal - to eliminate all enemies on the board. And the tools to achieve that goal are bombs - which would explode in sequence, based on the first placed bomb that would start the chained explosion.
</p>

<p align="justify">
  To setup the chained explosion, you need to place the bombs onto the board by dragging, and manually press an explode button to set-off the explosion of the first bomb. If there’s any other bomb within the explosion range of the first bomb – that bomb would explode too, and will affect other bombs / enemies within its explosion range - and we have ourselves an explosion chain.
</p>

<p align="justify"'>
  Here are the visual representation of bombs in the game:
</p>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/bombs.png)<br>

<em>
  From left to right: Cross bomb, Diagonal Bomb, Push Bomb
</em><br><br>

And here are the enemies within the game:<br>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/enemies.png)<br>

<em>
  From left to right: Normal enemy, Armored enemy (1 HP and 2 HP), and enemies with bomb (cross bomb, or diagonal bomb)
</em><br><br>

<p align="justify">
  Also, some of the other special elements:
</p><br>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/special_elements.png)<br>

<em>
  From left to right: Civilian, Explosive Keg, and Stack Explosive Keg
</em><br><br>

<div align="justify">
  The way these elements work are actually pretty simple:<br>
  <ul>
    <li><b>Bombs:</b> They explode in 2 patterns: Cross ("+"), or diagonal (X); with the exception of Push bomb - as with its name, the bomb push anything within its explosive range away.</li>
    <li><b>Enemies:</b> The main targets to eliminate within each level. They all have at least 1 HP; armored enemies will either have 2 or 3 HP, based on their armor. Meanwhile, enemies carrying bomb will explode upon interaction (being pushed at by something, or affected by any explosion from bombs / kegs / other enemy carrying bomb).</li>
    <li><b>Kegs:</b> Simply put, explosive barrel; one explode in the radius of 1-tile from itself; the other will have larger blast radius upon being interacted by something else (pushed at, or explosion).</li>
    <li><b>Civilian:</b> Just don't harm them, and you're fine.</li>
  </ul>
</div><br>

<p align="justify">
  With the elements established above, we have the gameplay rules in specific:
</p>
  
<h3>1. The winning / losing condition:</h3>
<div align="justify">
  <ul>
    <li>The player must <b>eliminate all enemies within time limit</b> of each level,</li>
    <li>Any civilian harmed <b>would not be tolerated,</b></li>
    <li>Player can try to trigger the explosion chain three times without any time limit.</li>
  </ul>

<h3>2. Setting up bombs:</h3>
  <ul>
    <li>Player drag bombs onto tiles within the level,</li>
    <li>The first placed bomb will start the chain of explosions - and will only be triggered after the player press the explode button.</li>
    <li>Placed bomb can not be returned, nor re-arranged to another tiles.</li>
    <li>Also, placed bomb can be re-arranged on to another tile within the level, as long as that tile is empty.</li>
    <li>Player do not have to place all provided bomb onto the level to trigger the explosion. The remaining bombs will be converted to coins as reward after the player win the level.</li>
  </ul>
<h3>3. Boosters:</h3>
  <ul>
    <li>Player have 4 different types of booster, can be bought by coins, or gained by watching an advertisement</li>
    <li>The 4 types of boosters are:</li>
    <ul>
      <li><b>Undo:</b> Return a placed bomb on the level. If the returned bomb is the first bomb to explode, then another bomb will be chosen to explode first randomly.</li>
      <li><b>Switch:</b> Change which bomb will explode first,</li>
      <li><b>Barrage:</b> Deals damage to random enemies, with the first damage dealt to a specific enemy,</li>
      <li><b>Destroy:</b> Destroy a specific target by choice.<br><br></li>
    </ul>
  </ul>
</div>

<p align="justify">And so, after being developed for ~1 month (and some additional time-consuming problems that we need to deal with in the first time self-publishing game), the game is available on Google Play.</p>

<p align="justify">We connected to Meta Ads, ran ad campaign in Brazil, and create a page on Facebook in hope for better advertising - and consider the page to be a stepping stone for advertising future games. Yet, we ran into some troubles.</p><br>

<h2>Development team and budget</h2>

<p align="justify">At the time of development, we have 4 members - a Game Designer, me; a 2D artist for all UI and 2d assets in game, another 2D artist for the animations in game; 2 developers for all UI and game logic / monetization logic / etc... Since this project is to be considered as a side project for most of us, only some of our team members took about $150 monthly, and other budgets are spent on marketing fees per day, which is $40 per day.</p>

<h2>The situation we're in</h2>

<h3>Advertising / Marketing</h3>

<p align="justify">After a week of advertising in Brazil, we found that the game is pretty appealing to user - with two creatives, based on the chain explosion / chain reaction mechanic, and big explosions. Cost per Install (CPI) within Brazil is approximately $0.15 - $0.2. So, first hand conclusion is - the game art style is pretty good, appealing to the player; the chain explosion mechanic seems to attract players as well (while the bigger explosion creative didn't perform as well). But, that wouldn't be enough to consider this game as a potential hit on the mobile game market.</p><br>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/ad_campaign_1_0_2.png)<br>

<em>Game advertising results within the first week of ad campaign in Brazil</em><br>

<h3>Performance, and first update</h3>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/drop_rate_1_0_2.png)<br>

<em>Performance of the first version - 1.0.2 - drop rates, by level 1 (level 0) to level 11 (level 10) - as you can see, we lost 45% players right in the 1st level (level 0)</em><br>

<p align="justify">The game's performance in the first few days was not good. Terrible, even - about <b>65% players in Brazil</b> lose at least 1 level, while they're not even passed level 10. Day 1 retention (RRD1) is very low - <b>12.5% on 2nd day, and 16.5% on 3rd day</b>; moreover, we lost about ~50% of players just after level 2 - which is a critical pain point. So, we figured - we have a terrible <b>first time user experience (FTUE)</b>, and the game seems to be - either incapable of introducing the main game mechanics to the player, or just too difficult for players to understand and interpret the game mechanics by themselves. From that conclusion, we made a quick patch to make the 5 first levels with the hope of improving FTUE.</p>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/ad_campaign_1_0_3.png)<br>

<em>2nd version - 1.0.3; the game's advertisement actually perform even better than the previous version, with one day CPI actually even drop to $0.13</em>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/drop_rate_1_0_3.png)<br>

<em>The level's drop rate and onboarding (the FTUE) are not much better though</em><br><br>

<p align="justify">But sadly, the game's performance did not go up. After a few days of advertisement, <b>RRD1 even plummmeted down to 8.5%</b>, with indifferences in engagement time (less than 4 minutes, on average). Meanwhile, even though we experienced a slight drop of drop rate from the first level (level 0), the game still loses ~50% of players right after the 2nd level.At this point, a major and immediate update is critically needed - the game's performance show us that the player still don't understand how to actually play the game and how its mechanics work; with some live user feedback also prove some parts of the UI are confusing or misleading. Therefore, we enrolled some changes within the core gameplay in order to improve FTUE and RRD1.</p>

<h3>Second update:</h3>

<p align="justify">First, we switched from three tries per levels into a time-limited gameplay (since, some players did commented that the three tries per levels needed to be explain explicitly - the current UI and rules made them misunderstood that they can freely planting bombs then trigger the explosion). The game now only requires player to eliminate all enemies on board, without reaching timelimit, nor killing any civilian.</p>

<p align="justify">Second - based on live users testing result, we determined that the game's design has violated a rule in UX design - a lack of "Undo" action for players, which is a major flaw. Why, you may ask - since there's an Undo booster; but, because it is a booster, so this function is locked behind game currency (or an ad) - meanwhile, the player still makes mistakes left and right and frustrated to no ends since there's no way to revert their mistake. So, 2 more things are implemented: Players can re-arrange bombs on the boards - bombs can be placed to another tile, as long as that tile is empty; also, player can drag planted bomb on the board back into the bomb section on screen to return it to its original stock. </p>

<p align="justify">Third - we implemented a step-by-step onboarding process for level 1 - since the game's suggestion in the previous two version clearly did not work, and also made changes to the bombs' display and visual cue: red bombs will explode, black bombs don't; each bomb that would explode will display its explosion range to indicate which other elements will be affected by the explosions.</p>

<p align="justify">Fourth - we remove the interstial ads and banner ads, in a (slightly) desperate attempt to improve FTUE, and made a few minor UI changes in according to the above game updates.</p>

<h3>And, the result:</h3>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/drop_rate_1_0_4.png)<br>

<em>Almost no improvement in drop rates for the third version - 1.0.4</em><br>

![alt text](https://github.com/bromodachi-team/bromodachi-web/blob/master/assets/blogs/post-mortem/bombermania/ad_campaign_1_0_4.png)<br>

<em>Ad campaign also perform slightly worse</em><br>

<p align="justify">The improvements in performance are almost insignificant. <b>RRD1 even dropped to ~6%</b>b> in the first two days; bounced to 12% in the third day, but that means after two versions of updates, we're back to square one. <b>CPI risen to $0.19 - $0.22</b>b>, while drop rates for each level almost did not even budge; we're still losing ~50% of players at level 2. Many of the live testing players are still confused about how to play the game or how the mechanics work. Some find it hard to even recognize the bomb types they dragged onto the level (and how do they even work). The conclusion is simple: these update are not enough to fix a game that have major problems within its core.</p>
<p align="justify">So, we had to make a painful decision: cut the marketing budget of the game, and leave it be.</p>

<h2>What we did right?</h2>

<p align="justify">First off, there's at least one (or, some) potential in this idea. The game's theme and UI seems to be ok and attractive enough. The chain reaction - bombs that explode sequentially - may have been the factor that drawn the player in and lower CPI to $0.13. And, maybe because our game's core idea is not similar to anything on the market at the moment (or at least, have enough creatitvity to make a difference) in comparison to other games, so that may have been another factor that attract players.</p>

<h2>But, what did we got wrong?</h2>

<p align="justify">Many things; but these two are possibly what made blew our chances to become something special.</p>

<h3>a. Lack of clear and intuitive onboarding process</h3>
<p align="justify">The game's uniqueness in gameplay obviously requires a special type of guidance and tutorials for the player - but we didn't do that. We did made a simple step by step onboarding level for players; but a complex game can hardly be explained with just a few swipe. Yes, players do know how place the bombs onto the level and then press the button to make them explode - but that's it. They don't know that the bombs will explode sequentially based on the first bomb to explode; nor do they even recognize that these bombs explode differently. But that's probably not the biggest problem.</p>

<h3>b. Too complicated</h3>
<p align="justify">Most of the successful puzzle / casual games on the market at the momemnt (of November 2025) have very simple control mechanics, with immediate feedbacks to the player during play. Players can understand right away what to do, what are the boundaries, and quickly drawn in the with the fun of the game. Meanwhile, we did not follow their footsteps, and perhaps, paid the price: You have to drag bombs onto the level without knowing how it works, and then press a button to try things out - too many step, too confusing (without explainations), too complicated. Most of the times the player don't know what they're looking at or what they're doing; got frustrated to no ends when things don't work the way they thought it would be - and obviously, quit to find a better experience.</p>

<h3>c. Confusing game name</h3>
<p align="justify">Bombermania is not a great name for searching on store - sure, it's unique and stand off from other competitors, but it's too much of a hassle for users to remember and search. Sure, out Facebook page did attract a lot of users to view and interact with, even with just the game's icon; but since users mainly come from Brazil (with its population's English literacy as low as 5%), then a complicated and confusing name would not bring much organic search on the store. In short - not a good way to name your game</p>

<h2>Lesson learned, simply put:</h2>
  <ul>
    <li><b>Keep it simple</b>: Simple game control, easy to understand rule;</li>
    <li><b>Immediate feedback</b>: Each drag / tap should also have a feedback - did they do something right or wrong? If wrong, why?</li>
    <li><b>Easy and quick rewards in onboarding process</b>: The first 20 levels should be played through fast, easy, smoothly, and capable of teaching the players the basics. If they're not, nothing else matters.</li>
    <li><b>Simpler game name</b> for better organic search on stores.</li>
  </ul>

## So, what now?
<p>This post-mortem of a potential mobile game hit is a lesson that we learned painfully and learned by heart - we're implementing this lesson into other projects at the moment. As for Bombermania, this probably is farewell - maybe one day, when we've became a team of more well-developed members with bigger budget, we'll revisit and perhaps perform a development-ritual-of-sort to revive this dear game of our from the dead. But for now, goodbye, Bombermania. And thank you, dear readers, for reading upto this point - hopefully, we'll see you in another post about analyzing how a game of ours became a major hit, and not another post-mortem.</p>
