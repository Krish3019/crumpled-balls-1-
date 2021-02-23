
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);



	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	//Create the Bodies Here.
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	box1 = new Box(1150,310,20,100)
	box2 = new Box(950,310,20,100)
	box3 = new Box(1050,350,180,20)
    
	ball = new Ball(200,340,35)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine)
 box1.display();
 box2.display();
 box3.display();
 ball.display();
 
 

}

function keyPressed(){
 if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-80})
 }
}

