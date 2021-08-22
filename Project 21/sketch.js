var ball;
var groundObj;
var leftSide, rightSide;
var radius = 40;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Bodies.circle();

	//Create the Bodies Here.
	ball = Bodies.circle(200,50,10,ball_options);
  	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);

	//groundObj.display();
	//groundObj = new ground(width/2, 670, width, 20);
	//leftSide = new ground(1100, 600, 20, 120);

  background(0);

  ellipse();

  groundObj.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
    }
}