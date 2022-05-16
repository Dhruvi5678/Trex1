
var trex ,trex_running;
var groundImage,ground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
 trex=createSprite(30,180,20,20)
 trex.addAnimation("trexLabel",trex_running)
 trex.scale=0.5
}

function draw(){
  background("black")
  drawSprites()

}
