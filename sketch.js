//Creating variables.
var car;
var wall;
var speed;
var weight;

function setup() 
{
  //Creating canvas.
  createCanvas(800,400);

  //Creating random speed and weight.
  speed = random(55,90);
  weight = random(400,1500);

  //Creating car and wall and assigning a speed for car.
  car = createSprite(0,200,10,10);
  car.velocityX = speed;
  wall = createSprite(700,200,60,height/2);

}

function draw() 
{
  background(0);  

  //Detecting car crash and helping to get an approximate speed of the car by assigning it some colours.
  if(wall.x - car.x < (car.width + wall.width) / 2)
  {
    car.velocityX = 0;
    
    var deformation = 0.5 * weight * speed * speed / 22509;

    //In some cases the car does not stop and goes into the wall. So, I have alsoassigned colours for the wall too.
    if(deformation <= 100)
    {
      car.shapeColor = "green";
      wall.shapeColor = "green";
    }

    if(deformation > 100 && deformation < 180)
    {
      car.shapeColor = "yellow";
      wall.shapeColor = "yellow";
    }

    if(deformation >= 180)
    {
      car.shapeColor = "red";
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}
