var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var blue_pomfret, red_pomfret
var question, question2, question3
var contestant, quiz;

function preload()

blue_pomfret=loadImage("blue pomfret.webp")
red_pomfret=loadImage("red pomfret.jpg")

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  blue_pomfret = createSprite(width / 2 - 50, height - 100);
  blue_pomfret.addImage("blue pomfret.webp");
  blue_pomfret.scale = 0.07;

  red_pomfret = createSprite(width / 2 + 100, height - 100);
  red_pomfret.addImage("red pomfret.jpg");
  red_pomfret.scale = 0.07;
}


function draw(){
  background("blue");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}