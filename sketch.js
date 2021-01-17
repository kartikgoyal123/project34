const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,ground;
var hero;
var fly;
var box1,box2,box3;
var box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20;
var monster;

function preload() {
//preload the images here
 backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1200, 400);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,350,800,20);
  hero = new Hero(150, -80, 300, 200);
  fly = new Fly(hero.body, { x: 150, y: -80 });
  box1 = new Box(370,320,50,50);
  box2 = new Box(440,320,50,50);
  box3 = new Box(370,240,50,50);
  box4 = new Box(440,240,50,50);
  box5 = new Box(370,160,50,50);
  box6 = new Box(440,160,50,50);
  box7 = new Box(370,80,50,50);
  box8 = new Box(440,80,50,50);
  box9 = new Box(370,0,50,50);
  box10 = new Box(510,0,50,50);
  box11 = new Box(580,320,50,50);
  box12 = new Box(510,320,50,50);
  box13 = new Box(580,240,50,50);
  box14 = new Box(510,240,50,50);
  box15 = new Box(580,160,50,50);
  box16 = new Box(510,160,50,50);
  box17 = new Box(580,80,50,50);
  box18 = new Box(510,80,50,50);
  box19 = new Box(580,0,50,50);
  box20 = new Box(510,0,50,50);
  monster = new Monster(750, 0, 200, 200);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();  
  box11.display();
  box12.display();;
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  monster.display();  

}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

