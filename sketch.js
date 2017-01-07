function setup() {

var i;
var r1;
var r2;
var r3;
var a1;
var dx, dy, ds;
var nx, ny,ns;
var x0, y0;
var x1, y1;
var s1;
var wid, hei;
var w;
var preloadbt;
var capture;

capture = createCapture(VIDEO);
capture.size(320, 240);
capture.hide(); 

noLoop();
  
}

function draw() {
    wid=960;
    hei=1600;

  createCanvas(960, 1600);
  frameRate(30);
  stroke(255, 204, 0);
  strokeWeight(10);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  //preloadbt= loadImage("reload.png");
  
  colorMode(HSB, 100);
  
//  image(capture, 0, 0);
  
  s = "Click and drag anywhere to draw RAINBOWS, Refresh to start over";
  fill(50);
  text(s, 10, 10, 270, 80);
  
}


function mousePressed() {
  x0=mouseX;
  y0=mouseY;
  
  
  capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
  

}


function mouseDragged() {
 //   clear();
  stroke(240);
  strokeWeight(2);
//  line(x0, y0, mouseX, mouseY);
      x1=mouseX;
      y1=mouseY;
        
   

//for (var n=0; n<=4; n++) {


//     x1=int(random(0, wid));

//     y1=int(random(0, hei));
        
for (var k=0; k<10; k++) {
        r1=int(random(0,100));
        r2=int(random(70,100));
        r3=int(random(70,100));
        w=int(random(4,8));
        
        strokeWeight(4);        
        stroke(k*10, 100, 100);
        line(x0+k*3, y0+k*3, x1+k*3, y1+k*3);
        noFill();

    }
    
//} 
 // background(20);
//  redraw(); 

  x0=mouseX;
  y0=mouseY;
  
  
  
  
  
  
  
  
   capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
  
  
  return false;
}





function mouseReleased() {


} 


