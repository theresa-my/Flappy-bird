function setup() 

{
  createCanvas(400, 400);
  y=200
  havejustpressed = false

}

function draw() 
{
  background(220);
  
  circle(200,y,20)
  
  
  if (keyIsDown(' '.charCodeAt(0))) 
    {
  
    if (havejustpressed == false )
      {
    
      y-=20
      
   
      }
    }
  havejustpressed = false
  
  if (keyIsDown(' '.charCodeAt(0)))
    {
    havejustpressed = true
  
    }
  
  
  
}