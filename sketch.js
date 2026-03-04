

function setup() {
    createCanvas(800, 600);
    squares = [];
    spawnInterval = 150;
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
    }

}



