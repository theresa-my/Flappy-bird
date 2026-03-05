
let fuglImg;
let point = 0; // point score

async function setup() {
    fuglImg = await loadImage('fugl.png')
    createCanvas(800, 600);
    squares = [];
    spawnInterval = 150;
    FuglSetup();
    gameon = true;

}

function draw() 
{
  
    if(keyIsPressed==true && gameon == false)
    {
        gameon = true;
        point = 0; // reset point
        squares = [];
        spawnInterval = 150;
        FuglSetup();
 
    }

    if (gameon == true)
    {
      background(220);

    //point score
      for (let i = 0; i < squares.length; i++)
      {
          if (x > squares[i].x + squares[i].width && !squares[i].passed)
          {
            point += 1;
            squares[i].passed = true; // markér forhindringen som passeret
          }
      }
      push()
      fill(0);
      textSize(13);
      text("Point: ", 10, 30);
      text(point, 70, 30);
      pop()


      //nye forhindringer
      spawnInterval--;
      if (spawnInterval == 0) 
      {
        squares.push(new Square());
        spawnInterval = 150;
      }

      // update forhindringer
      for (let i = squares.length - 1; i >= 0; i--) 
      {
        squares[i].update();
        squares[i].show();
        // fjern forhindringer der er uden for skærmen
        if (squares[i].offscreen()) 
        {
            squares.splice(i, 1);
        }

       //tjek for kollision
       
       if (x + r > squares[i].x && x - r < squares[i].x + squares[i].width)
        {
            if (y + r > squares[i].y || y - r < squares[i].y - squares[i].hul)
            {
                gameon = false; 
                push()
                textSize(60);
                fill(255, 0, 0);
                textAlign(CENTER, CENTER);
                text("Game Over", width / 2, height / 2);
                pop()
            }
            
        }
     }

    FuglDraw();
    }
}


