//  Nayan Smuek
// 	8/21/19
//  Project 8/22

var boids = [];
var iter = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids()
}


function draw() {
  background(255,255,255,50)//get rid of ball trails
  for(;iter<40;iter++){
    boids[iter].run();
  }
  iter = 0;
}

// function ballsDraw(){
//   background(5,5,5,50)//get rid of ball trails
//   for(i=0;i<10;i++){
//     boids[i].run();
//   }
// }

function loadBoids(){
  for(q=0;q<40;q++){ //create array with number of balls wanted
    boids[q] = new boid(random(width),random(height),random(-5,5),random(-5,5), q)
  }
}
