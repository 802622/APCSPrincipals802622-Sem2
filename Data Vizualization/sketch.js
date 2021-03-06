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
  background(255, 255, 255);
  fill(244, 127, 129);

  dropdown = createSelect(); 
  dropdown.position(150,500); 

  dropdown.option("Age"); 
  dropdown.option("Height(in)"); 
  dropdown.option("Weight(lbs)"); 
  dropdown.option("Weight and Age"); 
}

function lineMake(){
  let i = 1;
  for(;i<18;i++){
    variable = dropdown.value();
      line((40*i)+20, 800-4*testTable.get(i, variable), (40*i)+20, 750);
      line((40*i)+30, 800-4*testTable.get(i, variable), (40*i)+30, 750);
      line((40*i)+20, 800-4*testTable.get(i, variable), (40*i)+30, 800-4*testTable.get(i, variable));
      line(50,750,750,750)
      push();
      textSize(12);
      translate((40*i)+22,756);
      rotate(PI/3);
      text(testTable.get(i, "Name"), 0,0);
      pop();
  }
  fill(50);
  if(dropdown.value() == "Age"){
    textSize(16);
    text('20 yrs', 5, 700);
    textSize(48);
    text("Biostats", 250, 525);
  }
  if(dropdown.value() == "Height(in)"){
    textSize(16);
    text('60in', 5, 550);
    textSize(48);
    text("Biostats", 250, 450);
  }
  if(dropdown.value() == "Weight(lbs)"){
    textSize(16);
    text('100lbs', 3, 400);
    textSize(48);
    text("Biostats", 250, 40);
  }
  if(dropdown.value() == "Weight and Age"){

  }
}
function draw() {
  background(255,255,255);
  if(dropdown.value() != "Weight and Age"){
  lineMake()
  } else {
    let i = 1;
    for(;i<18;i++){
    line(4*testTable.get(i, "Age"), 800-4*testTable.get(i, "Weight"), 4*testTable.get(i, "Age")+10, 750);
    line(4*testTable.get(i, "Age"), 800-4*testTable.get(i, "Weight"), 4*testTable.get(i, "Age")+10, 750);
    line(4*testTable.get(i, "Age"), 800-4*testTable.get(i, "Weight"), 4*testTable.get(i, "Age")+10, 800-4*testTable.get(i, variable));

    push();
    textSize(12);
    translate((40*i)+22,756);
    rotate(PI/3);
    text(testTable.get(i, "Name"), 0,0);
    pop();
    }
  }
}


