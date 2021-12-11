const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, playerArcherImg;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher .png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  }

  //crear el cuerpo base del jugador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //Body.rotate(playerBase, Math.PI/6);

  //crear el cuerpo del jugador
  player = Bodies.rectangle(250, playerBase.position.y - 160, 100, 150, options);
  World.add(world, player);

  playerArcher = Bodies.rectangle(340, playerBase.position.y - 180, 180, 150, options);
  Body.rotate(playerArcher, 0.5);
  World.add(world, playerArcher);

}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180, 150,);

  //mostrar la imagen de la base del jugador utilizando la función image()
  image(playerimage,player.position.x,player.position.y,50,180);
  
  image(playerArcherImg,playerArcher.position.x,playerArcher.position.y,60,180);
  


  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO ", width / 2, 100);


  
}
