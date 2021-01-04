
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3 
var ground 
var paper 

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750, 690, 1500, 30);
	box1 = new Box(1200, 665, 170, 20);
	box2 = new Box(1105, 615, 20, 120);
	box3 = new Box(1295, 615, 20, 120);
	paper = new Paper(100, 360, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:85})
	}

}


