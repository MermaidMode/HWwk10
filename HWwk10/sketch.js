var rectangles = [];
var step = 1;


function setup() {
	createCanvas(800, 800);
	for(var i=0; i<1000; i++) {
		rectangles.push(new Rectangle(random(width), random(height),
		 40, random(255), 200, random(255), random(500),random(300)))
	}
	}



function draw() {
	background('pink');
	for(var i=0; i<1000; i++) {
		rectangles[i].move();
		rectangles[i].show();
	}	


}

function Rectangle(x, y, r, g, b, a, w, h) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
	this.w = w;
	this.h = h;

	this.show = function() {
		fill(this.r, this.b, this.g, this.a);
		rect (this.x, this.y, this.w, this.h);
	}

	this.move = function() {
		this.x += step;
		this.y += step;

		if(this.x > 700) {
			step = -1;
		}

		if(this.x < 100) {
			step = 1
		}
		if(this.y > 700) {
			step = -1;
		}

		if(this.y < 100) {
			step = 1;
		}
	}

}


