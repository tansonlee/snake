const SCL = 15; //Reset to 15
var backCol;
var rateInitial = 12;
var rate = rateInitial;


function setup() {
	createCanvas(600, 600);
	snake1 = new Snake();
	snake2 = new Snake();
	food = new Food();
	backCol = color(random(255), random(255), random(255));
}


function draw() {
	background(backCol);

	if (frameCount % rate == 0) {  //RESET TO 14
		snake1.update();
	}

	food.show();
	snake1.overlap();
	snake1.show();

	if (snake1.loc.x == food.loc.x * SCL && snake1.loc.y == food.loc.y * SCL) {
		snake1.eat();
		food.relocate();
		if (rate > 1) {
			rate--;
		}
		
		console.log("++");
	}
}


function keyPressed() {
	// if ((key == "LEFT" && snake1.speed.x != 1 && snake1.tailSections != 0) || (key == "LEFT" && snake1.tailSections == 0)) {
	// 	snake1.dir(-1, 0);
	// } else if ((key == "RIGHT" && snake1.speed.x != -1 && snake1.tailSections != 0) || (key == "RIGHT" && snake1.tailSections == 0)) {
	// 	snake1.dir(1, 0);
	// } else if ((key == "UP" && snake1.speed.y != 1 && snake1.tailSections != 0) || (key == "UP" && snake1.tailSections == 0)) {
	// 	snake1.dir(0, -1);
	// } else if ((key == "DOWN" && snake1.speed.y != -1 && snake1.tailSections != 0) || (key == "DOWN" && snake1.tailSections == 0)) {
	// 	snake1.dir(0, 1);
	// }
	if ((key == "A" && snake1.speed.x != 1 && snake1.tailSections != 0) || (key == "A" && snake1.tailSections == 0)) {
		snake1.dir(-1, 0);
	} else if ((key == "D" && snake1.speed.x != -1 && snake1.tailSections != 0) || (key == "D" && snake1.tailSections == 0)) {
		snake1.dir(1, 0);
	} else if ((key == "W" && snake1.speed.y != 1 && snake1.tailSections != 0) || (key == "W" && snake1.tailSections == 0)) {
		snake1.dir(0, -1);
	} else if ((key == "S" && snake1.speed.y != -1 && snake1.tailSections != 0) || (key == "S" && snake1.tailSections == 0)) {
		snake1.dir(0, 1);
	}	
}


function mousePressed() {
	snake1.tailSections++;
}