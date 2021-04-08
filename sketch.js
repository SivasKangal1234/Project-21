var wall, thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);


  spped=random(55,90)
  weight=(400,1500)

bullet = createSprite(50,200,50,5)
bullet.VelocityX=Speed 
bullet.shapeColor=color(255)

wall=createSprite(1500,200,60,height/2)
wall.shapeColor=color(132,132,132)
}

function draw() {
  background(0);  
  if(wall.x-bullet.x) < (bullet.width + wall.width/2)
  bullet.velocityX=0;

  var deformation = 0.5 * weight * speed * speed/22509
  if(deformation>12.45)
  bullet.shapeColor=color(254,10,10)

if(deformation<12.45 && >8.75)
bullet.shapeColor=color(238,68,28)

if(deformation<8.75)
bullet.shapeColor=color(57,231,33)




  drawSprites();
}