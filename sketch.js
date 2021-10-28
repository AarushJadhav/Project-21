const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var first_wall;
var second_wall;
var ball;
var radius = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground (width/2, 670, width, 20);
	first_wall = new Ground (1100, 600, 20, 120);
	second_wall = new Ground(1350, 600, 20, 120);

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	fill("white");
	ball = Bodies.circle(200, 200, 25, ball_options);
	World.add(world, ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
}

function draw() {
  background("black");
  ground.show();
  first_wall.show();
  second_wall.show();
  ellipse(ball.position.x, ball.position.y, radius, radius);
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x : 85, y : -85})
	}
}

