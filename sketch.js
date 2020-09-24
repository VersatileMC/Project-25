
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var redBox,redBoxleft,redBoxRight;
var paperBall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options1 ={
		isStatic:true,
   }
    
   groundSprite = createSprite(400,690,800,10);
   groundSprite.shapeColor = "gray";

    ground = Bodies.rectangle(400,680,800,10,options1);
	World.add(world,ground);

	Box = new Dustbin();

	paperBall = new Paper(50,600,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  drawSprites();
 
  Box.display();

  paperBall.display();


}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:200,y:-205});

	}

}

