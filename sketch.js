const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box2,box4,box5,box6,box8,box9;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   // ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);
    
    //level one
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    //level two
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    //top
    box9 = new Box(390,255,30,40);
    
    
    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
   // slingShot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
   
    box3.display();
    box4.display();
   
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    bird.display();
    
    //log6.display();
    slingShot.display();    
}
//function mouseDragged(){
    //Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
//}
//function mouseReleased(){
  //  slingShot.fly();
//}
