const Engine = Matter.Engine; //laws of Physics
const World = Matter.World; // will apply the laws of physics on all the bodies inside the world
const Bodies = Matter.Bodies; //individual body properties


var engine, world;
var box1,box2,box3,box4,box5
var ball;
var box1;
var pig1,pig2;
var log1,log2,log3,log4;
var ground1;
var bird1;




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

 
box1= new Box (700,320,70,70);
box2 = new Box (920,320,70,70);
pig1 = new pig (810,350);
log1 = new log (810,260,300,PI/2);

box3 = new Box (700,240,70,70);
box4 = new Box (920,240,70,70);
pig2 = new pig (810,220);
log2 = new log (810,180,300,PI/2);

box5 = new Box (810,160,70,70);
log4 = new log (760,120,150,PI/7);
log5 = new log (870,120,150,-PI/7);

bird1 = new bird(100,350)






ground1 = new ground(600,390,1200,20);


 
  
}

function draw() {
  background(220,255,255);  
  
  Engine.update(engine);


  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log4.display();
  log5.display();

  bird1.display();

}