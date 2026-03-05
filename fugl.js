
function FuglSetup()
{
   x = 100
   y = 100
   fart = 1.5
   r = 35
   havejustpressed = false

}

function FuglDraw()
{
  
  image(fuglImg, x - 50, y - 45, 110, 80);
  circle(x,y,r)
  
  
  if (keyIsPressed==true) 
  {
    if (havejustpressed == false )
    {
      
       fart = -3
    }
  }
 
  havejustpressed = false
  
  if (keyIsPressed==true)
  {
    havejustpressed = true
  }
    y += fart
    
     if (fart < 4)
      {
        fart = fart + 0.1
      }
    
}