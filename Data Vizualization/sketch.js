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

  dropdown = createSelect(); 
  dropdown.position(150,30); 

  dropdown.option("Age"); 
  dropdown.option("Height(in)"); 
  dropdown.option("Weight(lbs)"); 
}

function lineMake(){
  let i = 1;
  for(;i<18;i++){
    variable = dropdown.value();
      line((20*i)+10, 4*testTable.get(i, variable), (20*i)+10, 800);
  }
  if(dropdown.value() == "Age"){
    textSize(16);
    text('20', 5, 250);
  }
  if(dropdown.value() == "Height(in)"){
    textSize(16);
    text('60', 5, 350);
  }
  if(dropdown.value() == "Weight(lbs)"){
    textSize(16);
    text('100', 3, 700);
  }
}

function draw() {
  background(220);
  lineMake()
  //line(point[1].loc.x,point[1].loc.y,point[2].loc.x,point[2].loc.y)
}


