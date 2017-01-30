
function setup(){

  createCanvas(window.innerWidth, window.innerHeight);
    x=window.innerWidth/2;
    y=window.innerHeight/2;

}

function draw(){

  r= random(255);
  g=random(255);
  b=random(255);

  stroke(r,g,b);
  strokeWeight(2);
  point(x,y);

  var r = floor(random(4));
  switch (r){
  case 0:
    x = x-1;
  break;
  case 1:
    x = x+1;
  break;
  case 2:
    y= y+1
  break;
  case 3:
    y=y-1;
  break;
  }

}
