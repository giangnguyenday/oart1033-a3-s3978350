let flicker
let pOrigin;
let mouseTrack;
let mouse;
let emitter = []
let img;
let windX
let windY
let movelist 
let movelistShow
let guide

 function preload(){
   img = loadImage('source/BG3.png');
   movelist = loadImage('source/Movelist 2.png');
 }


  

function setup() {
    clear();
    createCanvas(windowWidth, windowHeight);
    emitter = new Emitter(width/2, height/1.5);
    windX = width/2
    windY = height/2
    colorMode(HSB);
    frameRate(60)
    flicker = -10
   
    guide=0
  }
  
function draw() {

  clear()

  blendMode(OVERLAY);
    clear();
    background (0,0,flicker);
    imageMode (CENTER);
    image(img, width/2,height/2);
    

    
    if(flicker < 30){
      flicker += random (-5,10)
    } 

    

  let force = createVector(0,-.2);
  emitter.applyForce(force);

  // let mouseTrack = createVector(mouseX,mouseY)
  // emitter.applyForce(mouseTrack)

  pOrigin = createVector(width/2, height/1.2);
  mouse = createVector(windX, windY);
  mouseTrack = p5.Vector.sub(mouse,pOrigin);
  mouseTrack.setMag(1);
  emitter.applyForce(mouseTrack);
  

   emitter.emit(5);
   emitter.update();
   emitter.show();

//////////////////////////////////////////////////////
if (keyIsDown(85)) {
  windX -= 40
}

if (keyIsDown(79)) {
  windX += 40
}



/////////////////////////////////////////////////////
strokeWeight(5);
stroke(230,255,255);
line (pmouseX,pmouseY,mouseX,mouseY);


///////////////////////////////////////////////////
if (keyIsDown(27)) {
  blendMode(BLEND);
  image(movelist, width/2, height/2)
  movelist.resize(1000,0)
  flicker = 20
  guide +=1
}

if(guide == 0){
fill (0,0,80)
noStroke()
textFont('Prometo')
text ("Hold Esc to see movelist",width/2/30,height/16);
textSize(40)
}
}