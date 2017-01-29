
  var axiom ="FX";
  var sentence = axiom;
  var len = 20;
  var rules = [];
  var angle;
  var sound;
  rules[0] = {
  a: "F",
  b: "X+YF+"
  }
  rules[1] = {
    a: "Y",
    b: "−FX−Y"
  }



function generate(){
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

    turtle();
}

function turtle(){
  resetMatrix();
//  background(0);
  translate(width / 2, height/2);
  stroke(200,200,200);
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
    else if ( current == "X"){
      pop(); 
    }
    else if ( current == "Y"){
     push();
    }




  }
}


function mousePressed() {

   sound.play();
   generate();


}

function setup() {
    sound=loadSound('pop.mp3');
    background(0);
    frameRate(1);
    angle = radians(90);
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0,0);
    background(5);

//var button;
//button = createButton('Generate');
//button.mousePressed(generate);
}

