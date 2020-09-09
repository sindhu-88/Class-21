var bullet,wall, thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.depth=2;
  bullet.shapeColor=(255,255,255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall.depth=1;
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 
}


function draw() {
  background(255,255,255);
  
  bullet.velocityX= speed;
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {bullet.shapeColor=color(255,0,0);}

    if(damage<10 )
    {bullet.shapeColor=color(0,255,0);}
  }

  drawSprites();
}



function hasCollided(bullet2,wall2){
  bulletRightEdge = bullet2.x + bullet2.width;
  wallLeftEdge=wall2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}



