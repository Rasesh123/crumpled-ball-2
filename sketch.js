
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;
var log;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinbase = new Dustbin(951,560,80,10);
	dustbinleft = new Dustbin(1000,530,10,70);
	dustbinright = new Dustbin(900,530,10,70);
	dustbin = new Dustbinimg(951,560,80,10);
	paper = new Paper(50,570,15);
	ground = new Ground(600,580,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbinbase.display();
 dustbinleft.display();
  dustbinright.display();
  dustbin.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Body.applyForce(paper.body,paper.body.position,{x:37,y:-37});

	}
}



