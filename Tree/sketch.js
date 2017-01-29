
  var axiom ="F";
  var sentence = axiom;
  var len = 100;
  var rules = [];
  var angle;
  var sound;
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
  stroke(190,0,50);
  for (var i =0; i<sentence.length; i++){
    var current = sentence.charAt(i);

    if(current == "F"){
      line(0,0,0,-len)
      translate(0, -len)
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
function mousePressed() {
 if (!pressed) {sound.play();
 turtle();
 generate();
generate();
 generate();
  generate();
  pressed=true;
}
}
function setup() {
  sound=loadSound('pop.mp3');
    background(0);
  frameRate(1);
angle = radians(24);
var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
 background(5);


//var button;
//button = createButton('Generate');
//button.mousePressed(generate);
}
