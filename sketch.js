var trex,trex_running,invisibleGround,cloud,obstacle;

function preload() {
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  obstacleImage1=loadImage("obstacle1.png");
  obstacleImage2=loadImage("obstacle2.png");
  obstacleImage3=loadImage("obstacle3.png");
  obstacleImage4=loadImage("obstacle4.png");
  obstacleImage5=loadImage("obstacle5.png");
  obstacleImage6=loadImage("obstacle6.png");
  cloudImage=loadImage("cloud.png");
}

function setup() {
  createCanvas(600,200); //600 is the width and 200 is the height of the canvas
  trex=createSprite(25,150,20,20); //x position,y position, width, height of the sprite
  trex.addAnimation("running",trex_running); //running is the label of the animation and it is mandatory to write
  trex.scale=0.5;
  ground=createSprite(300,170,600,40);
  ground.addImage(groundImage);
  invisibleGround = createSprite(300,180,600,20);
  invisibleGround.visible=false
}

function draw() {
  background("white");
  if( keyDown("UP_ARROW") && trex.y>120) 
  {
  trex.velocityY= -6; //negative velocity to make the trex jump above the ground
  }
  trex.velocityY=trex.velocityY+0.5; //gravity to bring it down
  ground.velocityX= -5;
  if(ground.x<0) {
    ground.x=400}
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
   if(frameCount%60==0) {
    cloud = createSprite(600,50,20,20);
    cloud.addImage(cloudImage);
    cloud.velocityX= -3;
    cloud.y=Math.round(random(10,100))
     cloud.depth=trex.depth;
     trex.depth=trex.depth+1;
   }
}

function spawnObstacles() {
  if(frameCount%60==0) {
    obstacle = createSprite(600,170,30,30);
    var rand=Math.round(random(1,6));
    console.log(rand);
    switch(rand)
    {
      case 1:obstacle.addImage(obstacleImage1);
             break;
      case 2:obstacle.addImage(obstacleImage2);
             break;
      case 3:obstacle.addImage(obstacleImage3);
             break;
      case 4:obstacle.addImage(obstacleImage4);
             break;
      case 5:obstacle.addImage(obstacleImage5);
             break;
      case 6:obstacle.addImage(obstacleImage6);
             break;
    }
    obstacle.scale=0.5;
    obstacle.velocityX=-5;
  }
}