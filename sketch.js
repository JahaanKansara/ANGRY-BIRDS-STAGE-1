const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,390,1200,20)
    
    box1 = new Box(700,345,70,70);
    box2 = new Box(900,345,70,70);

    pig1 = new Pig(800,355);
    log1 = new Log(800, 300, 275, PI/2)

    //290 (Top edge of log ie., 300 - 10) as reference
    box3 = new Box(700,255,70,70);
    box4 = new Box(900,255,70,70);
    pig2 = new Pig(800, 290-25);
    
    // box3 top edge 255-35 , 220 as reference
    log2 = new Log(800, 210, 275, PI/2 );

    // 210-10 (top edge of log) 200 as reference
    box5 = new Box(800, 165, 70, 70);
    log3 = new Log(750, 160, 100, PI/7);
    log4 = new Log(850, 160, 100, -PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();

}