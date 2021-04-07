var garden, gardenImage
var cat, catImage1,catImage2
var mouse, mouseImage

function preload() {
gardenImage = loadImage ("images/garden.png");
catImage1 = loadImage ("images/cat1.png");
catImage2 = loadAnimation ("images/cat2.png");
mouseImage1 = loadImage("images/mouse1.png");
mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");


}

function setup(){
    createCanvas(800,800);
    garden = createSprite(400,400);
    garden.addImage(gardenImage); 
    garden.scale = 1.2;

    cat = createSprite(600,600)
    cat.addImage(catImage1);
    cat.scale = 0.2;

    mouse = createSprite(100,600);
    mouse.addImage(mouseImage1);
    mouse.scale = 0.2;


}

function draw(){
    background("blue");



    drawSprites();
}


function keyPressed(){

  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 20;
  }


}
