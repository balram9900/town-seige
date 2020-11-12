const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;




function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,40);
  p1 = new Ground(300,230,200,20);
  p2 = new Ground(600,200,100,20);


  box1 = new Box(250,200,30,40);
  box2 = new Box(280,200,30,40);
  box3 = new Box(300,200,30,40);
  box4 = new Box(320,200,30,40);
  box5 = new Box(350,200,30,40);

  box11 = new Box(280,170,30,40);
  box22 = new Box(300,170,30,40);
  box33 = new Box(320,170,30,40);

  box111 = new Box(300,140,30,40);




  box21 = new Box(590,180,30,40);
  box222 = new Box(610,180,30,40);
  box223 = new Box(600,140,30,40);






  stone = new Box(200,200,30,40);

  slingshot1 = new Slingshot(stone.body,{x:100,y:200})

  
 
 
}

function draw() {
  background("green");  
  Engine.update(engine);

 
ground.display();
fill ("brown")
p1.display();
p2.display();

fill ("red")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box21.display();
box222.display();



fill ("blue")
box11.display();
box22.display();
box33.display();


fill("white")
box111.display();
box223.display();

fill ("black")
stone.display();


fill ("gray")
slingshot1.display();

  drawSprites();
}

function mouseDragged (){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}) 
	
	} 
	function mouseReleased () {

		slingshot1.fly()
		
    }
    
    function keyPressed(){

      if (keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:100,y:200})
        slingshot1.attach(stone.body);
      }
    }