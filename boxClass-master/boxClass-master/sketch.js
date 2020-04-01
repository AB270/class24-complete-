const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , ground1,box2,pig1,log,box3,box4,pig2,log2,box5,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(850,550,60,60);
    ground1=new Ground(600,600,1200,30);
    box2=new Box(1050,550,60,60);
    pig1=new Pig(950,550);
    log=new Log(950,450,270,PI/2);
    box3=new Box(850,400,60,60);
    box4=new Box(1050,400,60,60);
    pig2=new Pig(950,400);
    log2=new Log(950,350,270,PI/2);
    box5=new Box(950,300,60,60);
    log3=new Log(870,300,120,PI/7);
    log4=new Log(1020,300,120,-PI/7);
    bird=new Bird(300,20);
}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}