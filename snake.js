function Snake() {
	this.loc = createVector(width/2, height/2);
	this.speed = createVector(0, 0);
	this.tailSections = 0;
	this.tail = [];

	this.eat = function() {
		this.tailSections++;
		backCol = color(random(255), random(255), random(255));
	}

	this.dir = function(x, y) {
		this.speed.x = x;
		this.speed.y = y;
	}

	this.update = function() {
		if (this.tailSections == this.tail.length) {
			for (var i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.tailSections-1] = createVector(this.loc.x, this.loc.y);

		this.loc.x += this.speed.x * SCL;
		this.loc.y += this.speed.y * SCL;

		this.loc.x = constrain(this.loc.x, 0, width - SCL);
		this.loc.y = constrain(this.loc.y, 0, height - SCL);
	}

	this.show = function() {
		for (var i = 0; i < this.tail.length; i++) {
			col = map(i, 0, this.tail.length, 0, 255, true);
			col = color(random(col), random(col), random(col));
			fill(col);
			rect(this.tail[i].x, this.tail[i].y, SCL, SCL);
		}

		fill(255);
		rect(this.loc.x, this.loc.y, SCL, SCL);
	}

	this.overlap = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var d = dist(this.loc.x, this.loc.y, this.tail[i].x, this.tail[i].y);
			if (d == 0) {
				this.tailSections = 0;
				this.tail = [];
				rate = rateInitial;
			}
		}
	}
}