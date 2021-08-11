const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var bg,bgImg1,bgImg2,bgImg3,bg4Img;
var heading,headingImg;
var backButton,backButtonImg;
var startButton,startButtonImg;
var nextButton2,nextButton2Img;
var homeButton,homeButtonImg;
var visionButton,colorButton,exerciseButton,infoButton;
var visionButtonImg,colorButtonImg,exerciseButtonImg,infoButtonImg;
var gameState="start";
var eye,eye1;
var cblock,vblock,eblock;
var cblockImg,vblockImg,eblockImg;


//exercise
var circle,ball;
var circleImg,ballImg;

/*
var pendu1,pendu2,pendu3,pendu4,pendu5,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var world;

*/

function preload() {
  bgImg1=loadImage("bg1.png");
  bgImg2=loadImage("bg2.png");
  bgImg3=loadImage("bg3.png");
  bg4Img=loadImage("bg5.png");

  //eyelogo
  eye1=loadImage("eye.PNG");
 

  //heading
  headingImg=loadImage("heading.png");

  visionButtonImg=loadImage("vblock.png");
  colorButtonImg=loadImage("cblock.png");
  exerciseButtonImg=loadImage("eblock.png");
  infoButtonImg=loadImage("Iblock.png");
//exercise
  circleImg=loadImage("circle.png");
  ballImg=loadImage("ball.png");

//buttons
  backButtonImg=loadImage("backButton.png");
  startButtonImg=loadImage("nextButton.png");
  nextButton2Img=loadImage("next2.png");
  homeButtonImg=loadImage("homebutton.png");



  //instructions 
  cblockImg=loadImage("cblock2.png");
  eblockImg=loadImage("eblock2.png");
  vblockImg=loadImage("vblock.png");
}







function setup() {
  createCanvas(displayWidth-50,displayHeight-200);

  engine=Engine.create();
  world=engine.world;

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("bg1",bgImg1);
  bg.scale=0.7;
  

  heading=createSprite(650,50)
  heading.addImage("heading",headingImg);
  heading.visible=false;

  eye=createSprite(700,150);
  eye.addImage("heading eye",eye1);
  eye.scale=0.5;
  eye.visible=false;

  visionButton=createSprite(200,370,100,100);
  visionButton.addImage(visionButtonImg);
  visionButton.scale=0.9;
  visionButton.visible=false;
  

  colorButton=createSprite(520,350,100,100);
  colorButton.addImage(colorButtonImg);
  colorButton.visible=false;
  colorButton.scale=1.1;

  exerciseButton=createSprite(850,350,100,100);
  exerciseButton.addImage(exerciseButtonImg);
  exerciseButton.visible=false;
  exerciseButton.scale=0.9;

  infoButton=createSprite(1150,350,100,100);
  infoButton.addImage(infoButtonImg);
  infoButton.visible=false;
  infoButton.scale=0.65;

  //buttons
  backButton=createSprite(100,100,100,100);
  backButton.addImage(backButtonImg);
  backButton.visible=false;
  backButton.scale=0.4;

  
  startButton=createSprite(1100,120,100,100);
  startButton.addImage(startButtonImg);
  startButton.visible=false;
  startButton.scale=0.4;
 
  nextButton2=createSprite(1100,130,100,100);
  nextButton2.addImage( nextButton2Img);
  nextButton2.visible=false;
  nextButton2.scale=0.6;

  homeButton=createSprite(80,80,100,100);
  homeButton.addImage(homeButtonImg);
  homeButton.visible=false;
  homeButton.scale=0.4;


  //exercise1
  circle=createSprite(600,286);
  circle.addImage(circleImg);
  circle.scale=1.4;
  circle.visible=false;

  ball=createSprite(530,70);
  ball.addImage(ballImg);
  ball.scale=0.7;
  ball.visible=false;
  ball.rotation = 180;
  ball.rotateToDirection=true;
  ball.velocityX = 4;

  //exercise2
/*
  rect(200,200,30,30);
  roofObject=new Roof(600,100,230,20);
	pendu1 = new Pendulum(610,500,40);
	pendu2=new Pendulum(650,500,40);
  pendu3=new Pendulum(690,500,40);
  pendu4=new Pendulum(730,500,40);
  pendu5=new Pendulum(770,500,40);

  rope1=new Chain(pendu1.body,roofObject.body,-80, 0);
	rope2=new Chain(pendu2.body,roofObject.body,-40,0);
  rope3=new Chain(pendu3.body,roofObject.body,0,0);
  rope4=new Chain(pendu4.body,roofObject.body,40,0);
  rope5=new Chain(pendu5.body,roofObject.body,80,0);
	
	Engine.run(engine);

*/


  //exercise 3
  

  //instructions
  vblock=createSprite(200,220);
  vblock.addImage(vblockImg);
  vblock.scale=0.5;
  vblock.visible=false;

  cblock=createSprite(650,220);
  cblock.addImage(cblockImg);
  cblock.scale=0.7;
  cblock.visible=false;

  eblock=createSprite(1100,220);
  eblock.addImage(eblockImg);
  eblock.scale=0.6;
  eblock.visible=false;

}





function draw() {
  background(0); 
  Engine.update(engine); 
  drawSprites();
  if(gameState==="start"){
    start();
   
  }
  else if(gameState==="ex1"){
    exercise1();
  }
  else if(gameState==="ex2"){
    exercise2();
  }
  else if(gameState==="exercise3"){
    exercise3();
  }
  else if(gameState==="instruction"){
    instruction();
  }

}







function start(){

  visionButton.visible=true;
  colorButton.visible=true;
  exerciseButton.visible=true;
  infoButton.visible=true;

  

  heading.velocityX=3;
  heading.visible=true;
  if(heading.position.x>1000){
    heading.x=0
  }

  eye.visible=true;
  eye.velocityX=3;
  if(eye.position.x>1000){
    eye.x=heading.x+50;
    
  }

  backButton.visible=false;
  circle.visible=false;
  ball.visible=false;
  startButton.visible=false;
  nextButton2.visible=false;
  homeButton.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;


  bg.addImage("bg1",bgImg1);
  bg.changeImage("bg1",bgImg1);
  bg.scale=0.7;

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("VISION CHECK",100,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("COLOUR VISION",450,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("EYE  MUSCLES",800,520);
  text("EXERCISE",825,550);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("INSTRUCTIONS",1080,520);

  visionButton.rotation=visionButton.rotation+2;
  colorButton.rotation=colorButton.rotation+2;
  exerciseButton.rotation=exerciseButton.rotation+2;
  infoButton.rotation=infoButton.rotation+2;

  if(mousePressedOver(exerciseButton)){
    gameState="ex1";
    
  }
  else if(mousePressedOver(infoButton)){
    gameState="instruction";
  }
}





function exercise1(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  nextButton2.visible=false;
  homeButton.visible=false;
  heading.visible=false;
  eye.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;


  backButton.visible=true;

  
  //exercise

  bg.addImage("bg2",bgImg2);
  bg.changeImage("bg2",bgImg2);
  bg.scale=0.7;

  circle.visible=true;
  ball.visible=true;


  startButton.visible=true;
  ball.rotation=ball.rotation+1;

  if(mousePressedOver(backButton)){
    gameState="start";
  }

    if(mousePressedOver(startButton)){
      gameState="ex2";
    }
}





function exercise2(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  startButton.visible=false;
  homeButton.visible=false;
  heading.visible=false;
  eye.visible=false;
  vblock.visible=false;
  cblock.visible=false;
  eblock.visible=false;


  backButton.visible=true;
  nextButton2.visible=true;

  //exercise
  circle.visible=false;
  ball.visible=false;

 /* rectMode(CENTER);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  pendu1.display();
  pendu2.display();
  pendu3.display();
  pendu4.display();
  pendu5.display();


  if(keyDown(UP_ARROW)){
  Matter.Body.applyForce(pendu1.body,pendu1.body.position,{x:-50,y:-50})
  }
  
  */
  if(mousePressedOver(backButton)){
    gameState="start";
  }

  


  /*else if(mousePressedOver(nextButton2)){
     exercise3();
  }
 
 */
  
}






 /*function exercise3(){
 
  backButton.visible=true;
  
  
  
  
  
 nextButton2.visible=false;

  //exercise
  textSize(20);
  fill("black");
  text("complete");

  if(mousePressedOver(backButton)){
    gameState="start";
  }
}

*/

function instruction(){
 
  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  heading.visible=false;
  eye.visible=false;

  bg.addImage("bg3",bgImg3);
  bg.changeImage("bg3",bgImg3);
  bg.scale=12;

  homeButton.visible=true;



  vblock.visible=true;
  vblock.rotation=vblock.rotation-2;
  cblock.visible=true;
  cblock.rotation=cblock.rotation-2;
  eblock.visible=true;
  eblock.rotation=eblock.rotation-2;

  for(var num=220;num<600;num=num+30){
    line(400,num,400,num+20);
  }
  for(var num=220;num<600;num=num+30){
    line(860,num,860,num+20);
  }

 if(mousePressedOver(homeButton)){
  gameState="start";
 }


  //instructions about buttons
 textSize(50);
 fill("yellow");
 text("𝘐𝘕𝘚𝘛𝘙𝘜𝘊𝘛𝘐𝘖𝘕𝘚",460,80);
 fill("black");
 text("★☆★                          ★☆★",320,80);
 text("........................",452,87);

 //instructions about vision button
 textSize(40);
 fill("darkpink");
 text("✴ vision box is  ",100,350);
 text("used to check our",20,400);
 text("users eye vision",20,450)


 //instructions about colour vision button
 textSize(40);
 fill("darkpink");
 text("✴ colour box is for",500,350);
 text(" to  find  eye  colours",420,400);
 text("deficiency",420,450)

 textSize(40);
 fill("darkpink");
 text("✴ exercise box is ",960,350);
 text(" for giving the strength",880,400);
 text(" to the muscles of eye",880,450)


}



