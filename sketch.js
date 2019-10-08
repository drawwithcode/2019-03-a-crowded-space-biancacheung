var myHearts = [];
var amountOfHeart = 24;
var velocity = 5;
var dimension = 20
var colorList = [
  '#F9DBBD',
  '#E75A7C',
  '#E28413',
  '#FFA5AB',
  '#C42847',
];

function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {background('#ffffff');
    drawWords();
    if(myHearts.length > 0) {
        for(var i = 0; i < myHearts.length; i++) {
            myHearts[i].update();
            myHearts[i].display();
        }
    }
}

function drawWords() {
  textAlign(CENTER, CENTER);
  textSize(32);
   fill('#999999')
   text('click to have some love', windowWidth/2, windowHeight - 60);
}

function heart(x, y, size) {
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  fill(color(colorHex));

  beginShape();
  vertex(x, y);
  fill(colorHex);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function mousePressed() {
  for (var i = 0; i < amountOfHeart; i++) {
          myHearts[i] = new Explosion(width / 2, height / 2, random(3, 35));
      }
  }
  class Explosion {
      constructor(x, y, size) {
          this.position = createVector(x, y);
          this.speed    = createVector(random(-velocity, velocity), random(-velocity, velocity));
          this.size     = dimension;
      }

      update() {
          this.position.add(this.speed);
      }

      display() {
          noStroke();
          fill(255);
          heart(this.position.x, this.position.y, this.size);
      }
  }
