

function setup() {
    createCanvas(800, 600);
    squares = [];
    spawnInterval = 150;
    FuglSetup();
}

function draw() {
    background(220);

    //nye forhindringer
    spawnInterval--;
    if (spawnInterval == 0) {
        squares.push(new Square());
        spawnInterval = 150;
    }

    // update forhindringer
    for (let i = squares.length - 1; i >= 0; i--) {
        squares[i].update();
        squares[i].show();
        // fjern forhindringer der er uden for skærmen
        if (squares[i].offscreen()) {
            squares.splice(i, 1);
        }


        if (x - r > squares[i].x + squares[i].width && x + r > squares[i].x)
        {
           if (y + r > spuares[i].y && y - r < squares[i].y - squares[i].hul)


            SEND hjælp
        }
    }

    FuglDraw();

}



