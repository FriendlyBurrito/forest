
  var axiom ="F";
var sentence = axiom;
var len = 100;
var rules = [];
var angle;
var sound;
var timer=0;
rules[0] = {
a: "F",
b: "FF+[+F-F-F]-[-F+F+F]"
}



function generate(){
len *= 0.56;
var nextSentence ="";
  for (var i =0; i< sentence.length; i++){
      var found=false;
      var current = sentence.charAt(i);
      for (var j=0; j<rules.length; j++){
          if (current == rules[j].a){
            found=true;
            nextSentence += rules[j].b;
            break;
          }
      }

      if (!found){
        nextSentence += current;
      }
  }

  sentence = nextSentence;
//  createP(sentence);
  turtle();
}

function turtle(){
resetMatrix();
//  background(0);
translate(width / 2, height);
stroke(0,0,0);
for (var i =0; i<sentence.length; i++){
  var current = sentence.charAt(i);

  if(current == "F"){
    line(0,0,0,-len);
    translate(0, -len);
  }
  else if ( current == "+"){
    rotate(angle);
  }
  else if ( current == "-"){
    rotate(-angle);
  }
  else if ( current == "["){
    push();

  }
  else if ( current == "]"){
    pop();

  }
}
}

var pressed=false;


function setup() {
angle = radians(24);
sound=loadSound('pop.mp3');
var canvas = createCanvas(window.innerWidth, window.innerHeight);
canvas.position(0,0);
// background(5);


if (pressed) turtle();

//var button;
//button = createButton('Generate');
//button.mousePressed(generate);
}


function draw() {
if  ( pressed)timer++;
if (timer == 20) generate();
if (timer == 25) generate();
if (timer == 30) generate();
if (timer == 35) generate();

}

function mousePressed() {
pressed=true;
}
