


class Square {
	constructor() {
		this.x = width + 20;
		this.y = random(200, height);
		this.width = 60;  
        this.height = 1000;  
		this.speed = 3;          
	}

	// move the square leftwards
	update() {
		this.x -= this.speed;
	}

	// draw the square on the screen
	show() {
		fill(58, 179, 21);
		noStroke();
		rect(this.x, this.y, this.width, this.height);
        rect(this.x, this.y - this.height - 150, this.width, this.height);
	}

	
	offscreen() {
		return this.x + this.width < 0;
	}
}



