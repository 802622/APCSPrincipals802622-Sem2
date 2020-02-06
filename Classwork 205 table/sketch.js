//  Nayan Smuek
//  Project 2/05
let testTable;

function preload() {
  testTable = loadTable('assests/biostats.csv', 'csv', 'header');
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


  testTable.setNum(1, 'Name', 1);
  console.log(testTable.getColumn(0));
}


function draw() {
}


