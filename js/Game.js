class Game 
{
  constructor()
  {}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      
      if(contestantCountRef.exists())
      {
        contestantCount = contestantCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    RedPlayer = createSprite(100, 200);
    RedPlayer.addImage("k", redRunning);

    YellowPlayer = createSprite(300, 200);
    YellowPlayer.addImage("l", yellowRunning);

    GreenPlayer = createSprite(500, 200);
    GreenPlayer.addImage("k", greenRunning);

    BluePlayer = createSprite(700, 200);
    BluePlayer.addImage("h", blueRunning);

    trexs = [RedPlayer, YellowPlayer, GreenPlayer, BluePlayer];
    
  }

  play()
  {
    //write code here to hide question elements
    

    //write code to change the background color here
    background("grey");

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Let the games begin!", 420, 80),

    //call getContestantInfo() here
    Player.getPlayerInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined)
    {
      
      ground = createSprite(500,800);
      ground.addImage(groundImage);

      invisibleGround = createSprite(500,800, displayWidth, 80);
      invisibleGround.visble=false;
      
      var index = 0;

      var x = 175;
      var y;

      for(var plr in allPlayers)
      {
        index = index+1;

        x = x+200;
        y = displayHeight - allPlayers[plr].distance;

        trexs[index-1].x = x;
        trexs[index-1].x = x;

        if(index === players.index)
        {
          trexs[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = trexs[index-1].y;
        }

      }
  
  
    }

    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distance += 20;
      player.update();
    }

    if(player.distance>3860)
    {
      gameState = 2;
    }

    drawSprites();
    //write code to highlight contest who answered correctly

    
  }

  end()
  {
    background("black");

    fill("white");
    textSize(30);
    text("Game has ended.", 400, 400)
  }

}
