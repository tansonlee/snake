function Food() {
	this.loc = createVector(floor(random(0, floor(width/SCL))), floor(random(0, floor(height/SCL))));

	this.show = function() {
		fill(100, 150, 200);
		rect(this.loc.x*SCL, this.loc.y*SCL, SCL, SCL);
	}

	this.relocate = function(v) {
		this.loc = createVector(floor(random(0, floor(width/SCL))), floor(random(0, floor(height/SCL))));
		while (this.loc == v) {
			this.loc = createVector(floor(random(0, floor(width/SCL))), floor(random(0, floor(height/SCL))));
		}
	}
}