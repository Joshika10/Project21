var bullet,wall;
var speed, weight;
var cardeform;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor="white";

  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor="80,80,80";
}
function draw() {
  background("black");

  bullet.velocityX=speed;
  
  if(bullet.x-wall.x < wall.width/2+bullet.width/2
    &&wall.x-bullet.x<wall.width/2+bullet.width/2){
      bullet.velocityX=0;
      bullet.x = wall.x-25;
      bullet.y= wall.y;
    cardeform = 0.5 * weight * speed * speed / 22500 ;
    if(cardeform<100){
      bullet.shapeColor="green";
      wall.shepeColor="green";
      textSize(20);
      fill("green");
     
    }
    else if(cardeform>100 && cardeform<180){
      bullet.shapeColor="yellow";
      wall.shepeColor="yellow";
    
    }
    else if(cardeform>180){
      bullet.shapeColor = "red";
       textSize(20);
       fill("red");
       
    }
    console.log(cardeform);  
    
    fill("red");
   
    fill("white");
   
    fill("pink");
    
  }

  if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness);

if(damage>10)
{
  wall.shapeColor(255,0,0);
}

if(damage<10)
{
  wall.shapeColor(0,255,0);
}
}
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x=bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}

