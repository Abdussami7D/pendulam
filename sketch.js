
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ROOF;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ROOF = new roof(370,100,700,40);

    //bob1 = new bob(200,680,75);
	//chain1 = new Chain(ROOF.body,bob1.body);

  //  bob2 = new bob(300,680,75);
	//chain2 = new Chain(ROOF.body,bob2.body);

	bob3 = new bob(400,680,50);
	chain3 = new Chain(ROOF.body,bob3.body);

	//bob4 = new bob(500,680,75);
	//chain4 = new Chain(ROOF.body,bob4.body);
	
	//bob5 = new bob(600,680,75);
	//chain5 = new Chain(ROOF.body,bob5.body);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ROOF.display();

  //chain1.display();
  //chain2.display();
  chain3.display();
  //chain4.display();
  //chain5.display();

  //bob1.display();
 // bob2.display();
  bob3.display();
 // bob4.display();
//  bob5.display();

  drawSprites();
 
}



