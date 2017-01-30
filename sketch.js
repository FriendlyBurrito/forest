
function setup(){

createCanvas(1100,500);
x=window.innerWidth/2;
y=window.innerHeight/2;


}

function draw(){

  r= random(255);
  g=random(255);
  b=random(255);


    if (keyIsDown(LEFT_ARROW))
      x-=1.5;

    if (keyIsDown(RIGHT_ARROW))
      x+=1.5;

    if (keyIsDown(UP_ARROW))
      y-=1.5;

    if (keyIsDown(DOWN_ARROW))
      y+=1.5;
       //clear(); kad taskas judetu nieko nepiesiant uz saves
       stroke(255);
      fill(r,g,b);
      ellipse(x,y,5,5);
}
