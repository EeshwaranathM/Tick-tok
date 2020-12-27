var hr,mn,sc;
var scAngle,mnAngle,hrAngle;


function setup() {
  createCanvas(800,800);
  
  angleMode(DEGREES);
}

function draw(){
  background(0,0,0);  
   
  translate(400,400);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr %12, 0, 12, 0, 360);

  //fill(255, hour, 0);
  //ellipse(width/2, height/2, minute, minute);
   //seconds hand
   //push();
   //rotate(10);
   
   //pop()


  
  //SecondArc
  stroke(255,0,0);
  strokeWeight(10);
  fill(0,0,0);
  arc(0, 0, 500, 500, 0,scAngle, OPEN);
  push();
  rotate(90);
  text(sc,0,0);
  pop();
  //pop();

  //MinuteArc
  stroke(0,255,0);
  strokeWeight(10);
  fill(0,0,0);
  arc(0, 0, 475, 475, 0, mnAngle,OPEN);

  //HourArc
  stroke(0,0,255);
  strokeWeight(10);
  fill(0,0,0);
  arc(0, 0, 450, 450, 0, hrAngle,OPEN);

   //SecondLine
   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(9);
   line(0,0,175,0);
   pop();

   //MinuteLine
   push();
   rotate(mnAngle);
   stroke(0,255,0);
   strokeWeight(9);
   line(0,0,150,0);
   pop();

  //HourLine
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  
  
 

  
  drawSprites();
 


}
