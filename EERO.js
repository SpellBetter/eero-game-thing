 var programCode = function(processingInstance) {
  with(processingInstance) {
    size(screen.width - 50, screen.height - 150);
    frameRate(60);
		
		var keyIsPressed = false;
		var x = 200;
		var y = 200;
		var eeroX = random(width);
		var eeroY = random(height);
		var turnSpeed = 3;
		var vel = 3;
		var angle = random(360);
		var keys = [];
		var score = 0;
		
		textAlign(3, 3);
		textSize(36);
		imageMode(3);
		rectMode(3);
		fill(0);
		
		var target = loadImage("target.png");
		var eero = loadImage("eero.png");
		
		draw = function(){
			background(255);

			if(keys[LEFT]){
				angle += turnSpeed * 0.0174533;
			}
			if(keys[RIGHT]){
				angle -= turnSpeed * 0.0174533;
			}
			if(keys[UP]){
				vel++;
			}
			if(keys[DOWN]){
				vel--;
			}
			
			vel *= 0.97;
			x += sin(angle) * vel;
			y += cos(angle) * vel;
			
			x = constrain(x, 0, width);
			y = constrain(y, 0, height);
			
			pushMatrix();
			translate(x, y);
			
			rotate(-angle - 180 * 0.0174533);
			
			ellipse(0, 0, 100, 100);
			image(eero, 0, 0, 100, 100);
			popMatrix();
			
			image(target, eeroX, eeroY);
			
			if(dist(x, y, eeroX, eeroY) < 100){	
				eeroX = random(width);
				eeroY = random(height);
				score++;
			}
			
			text("Score: " + score, width/2, height/2);
		}
		
		keyPressed = function(){
			keys[keyCode] = true;
		};
		keyReleased = function(){
			keys[keyCode] = false;
		};
  }
};

var author = "Gavin Liu";
var canvas = document.getElementById("mycanvas");
var processingInstance = new Processing(canvas, programCode);
