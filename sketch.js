var canvas, backgroundImage;
var RedPlayer, BluePlayer, YellowPlayer, GreenPlayer, TrexPlayers;

var gameState = 0;
var contestantCount;
var allContestants;
var name;
var database;
var distance = 0;

var game, player, form;




var trex;
var ground, invisibleGround, groundImage;


var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;



var gameOverImg;
var jumpSound , checkPointSound, dieSound;

var redRunning, blueRunning, yellowRunning, greenRunning;
var redDies, blueDies, yellowDies, greenDies;

var trexs;

function preload()
{

  redRunning = loadAnimation("images and sound/RedTrex1.png", "images and sound/RedTrex2.png", "images and sound/RedTrex3.png");
  redDies = loadAnimation("images and sound/RedDied.png");

  blueRunning = loadAnimation("images and sound/BlueTrex1.png", "images and sound/BlueTrex2.png", "images and sound/BlueTrex3.png");
  blueDies = loadAnimation("images and sound/BlueDied.png");

  yellowRunning = loadAnimation("images and sound/YellowTrex1.png", "images and sound/YellowTrex2.png", "images and sound/YellowTrex3.png");
  yellowDies = loadAnimation("images and sound/YellowDied.png");

  greenRunning = loadAnimation("images and sound/GreenTrex1.png", "images and sound/GreenTrex2.png", "images and sound/GreenTrex3.png");
  greenDies = loadAnimation("images and sound/GreenDied.png");

  groundImage = loadImage("images and sound/ground2.png");
  
  cloudImage = loadImage("images and sound/cloud.png");
  
  obstacle1 = loadImage("images and sound/obstacle1.png");
  obstacle2 = loadImage("images and sound/obstacle2.png");
  obstacle3 = loadImage("images and sound/obstacle3.png");
  obstacle4 = loadImage("images and sound/obstacle4.png");
  obstacle5 = loadImage("images and sound/obstacle5.png");
  obstacle6 = loadImage("images and sound/obstacle6.png");
  
   restartImg = loadImage("images and sound/restart.png");
  gameOverImg = loadImage("images and sound/gameOver.png");
  
  jumpSound = loadSound("images and sound/jump.mp3");
  dieSound = loadSound("images and sound/die.mp3");
  checkPointSound = loadSound("images and sound/checkPoint.mp3");


}

function setup()
{
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 
  
  
}


function draw()
{
  background("lightblue");

  if(contestantCount === 4)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }

  if (gameState === 2)
  {

  }

  drawSprites();

}
