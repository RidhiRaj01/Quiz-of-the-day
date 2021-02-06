var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(700,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("pink")
  if(playerCount === 4){
    game.update(1);
  } 
  if(gameState === 1){
    clear();
    game.play();
  }
}
