const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1,box2,box3;
var ceiling, ball;
var rope;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,30);
    box1= new Box(700,300);
    box2= new Box(700,250);
    box3= new Box(700,200);
    ceiling= new Ground(600,10,1200,30);
    ball= new Ball(600,300,20);
    rope=new Rope(ball.body,ceiling.body);
}

function draw(){
     background(0,0,0);
     Engine.update(engine);
     ground.display()
     box1.display();
     box2.display();
     box3.display();
     ceiling.display();
     ball.display();
     rope.display();
}

function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45});
    }
}



   