var bg, bgImg
var bottomGround
var topGround
var rocket, rocketImg
var bottomObstacle,bottomObstacleImg,bottomObstacleImg2,bottomObstacleImg3,bottomObstacleGroup
var topObstacle,topObstacleImg,topObstacleImg2,topObstacleGroup
var gameState = "PLAY"
var score = 0

function preload() {
  bgImg = loadImage("space.jpeg")
  rocketImg = loadAnimation("rocket.png")
  bottomObstacleImg = loadImage("meteor.png")
  topObstacleImg = loadImage("meteor.png")

}


function setup() {
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3

  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;

  rocket = createSprite(100,200,20,50);
  rocket.addAnimation("rocket",rocketImg);
  rocket.scale = 0.2;

  bottomObstacleGroup = new Group()
  topObstacleGroup = new Group ()
}


function draw() {
  background(bgImg);
   
  if (gameState === "PLAY"){
    if(keyDown("space")) {
      rocket.velocityY= -6 ;         
     }
   
     rocket.velocityY = rocket.velocityY+2;
      
     spawnBottomObstacle()
     spawnTopObstacle()

     if (rocket.isTouching(topGround) || rocket.isTouching(bottomGround) || 
        rocket.isTouching(bottomObstacleGroup) || rocket.isTouching(topObstacleGroup)) {
          gameState = "END"
     }
     drawSprites();
  }

  else if(gameState==="END"){
    fill("yellow")
    textSize(25)
    text("Score :"+score,300,700)
    text("game over",100,200)
  }



  
}

function spawnBottomObstacle(){
  if (frameCount%80===0) {
    bottomObstacle = createSprite(400,Math.round(random(200,330)),20,40)
    bottomObstacle.addImage(bottomObstacleImg)
    bottomObstacle.scale = 0.5
    bottomObstacle.velocityX=Math.round(random(-5,-9))
    bottomObstacleGroup.add(bottomObstacle)

  }

}

function spawnTopObstacle() {
  if(frameCount%120===0){
    topObstacle = createSprite(400,Math.round(random(80,120)),20,40)
    topObstacle.addImage(topObstacleImg)
    topObstacle.scale = 0.5
    topObstacle.velocityX=Math.round(random(-5,-9))
    topObstacleGroup.add(topObstacle)
}
}



