var monkey, monkeyAnimation, banana, bananaImage;
var stone, stoneImage,ground,bananaGroup;
var obstacle,obstacleGroup,background1,backgroundImage,score;


function preload(){
monkeyAnimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  
backgroundImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png"); 
}


function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
   background1=createSprite( 0,-displayHeight*4,displayWidth, displayHeight*5);
  background1.addImage(backgroundImage);
  
 monkey=createSprite(130,340,10,10); 
 monkey.addAnimation("monkey",monkeyAnimation);
monkey.scale=0.2;
  
  
  ground=createSprite(200,400,400,30); 
  ground.visible=false;
  
  
  obstacleGroup=new Group();
  
 bananaGroup=new Group();
  
  monkey.collide(ground);
  
 
  
  score=0;
}

function draw() {
 background(1);
 image(backgroundImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
  drawSprites();
  
  
  stroke("white");
  textSize=20;
  fill("white");
  text("Score: "+score,240,100);
  
  
  if(bananaGroup.isTouching(monkey)){
   score=score+2
    foodGroup.destroyEach();
    
  }
  
 

  switch(score){
   
    case 10: monkey.scale=0.22;
      break;
    case 20: monkey.scale=0.24;
      break;
    case 30: monkey.scale=0.26;
      break;
    case 40: monkey.scale=0.28;
      break;
      default: break;
      
      
      
  }
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY = -11; 
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.2  
    
    
  }
  
 

  
  Banana();
  
  obstacles();
  

  
}      


function Banana(){
 if(World.frameCount%80===0) {
   var banana=createSprite(810,3,20,20);
   banana.addImage("banana",bananaImage);
   banana.y=random(120,200);
   banana.velocityX=-6;
   banana.scale=0.08;
   banana.lifetime=100;
   bananaGroup.add(banana);
 }
  
}
function obstacles(){
  if(World.frameCount%300===0){
  var obstacle=createSprite(810,370,10,40);
  obstacle.addImage("stone",stoneImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-6;
    
    obstacleGroup.add(obstacle);
  
  
}
}