//  Nayan Smuek
//  Project 2/05
let testTable;
let points = [];

function preload() {
  testTable = loadTable('assests/biostats.csv', 'csv', 'header');
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}

function lineMake(){
  let i = 1;
  for(;i<18;i++){
    //let x = (testTable.get(i,1))
    console.log(i);
        line(40*i, 100,40*i,10*testTable.get(i, "Age"));
  }
}

function draw() {
  background(220);
  lineMake()
  //line(point[1].loc.x,point[1].loc.y,point[2].loc.x,point[2].loc.y)
}


