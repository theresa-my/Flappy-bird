function FuglSetup()
{
   x = 100
   y = 100
   fart = 1.5
   havejustpressed = false
}

function FuglDraw()
{
  circle(x, y, 10);
  
  
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