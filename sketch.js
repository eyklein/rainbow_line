balls=[];
function setup() {
  createCanvas(windowWidth,windowHeight)
  colorMode(HSB)
  for(var i=0;i<30;i++){
    balls.push(new Ball(.1, color(i*5,200,200)));
  }
  noStroke();
  strokeWeight(2)
  noFill()
}

function draw() {
  background(0,.1)
  // for(var i=0;i< balls.length;i++){
  //   balls[i].update();
  //   balls[i].display();
  // }
  
  balls[0].update(createVector(mouseX,mouseY),true);
  for(var i=1;i< balls.length;i++){
    balls[i].update(balls[i-1].pos);
    
  }
  for(var i=0;i< balls.length-3;i++){
    
    balls[i].displayLine(balls[i+1],balls[i+2],balls[i+3]);
  }
}
function Ball(_easing, _color){
  this.pos=createVector(mouseX,mouseY)
  this.color=_color;
  
  this.easing=_easing
  
  this.update=function(_leadPoints){
    
    this.pos.x +=(_leadPoints.x-this.pos.x)*this.easing;
  
    
    
    this.pos.y +=(_leadPoints.y-this.pos.y)*this.easing;
  }
  this.display=function(){
    fill(this.color)
    ellipse(this.pos.x,this.pos.y,15,15)
  }
  this.displayLine=function(_nextBall,_nextNextBall,_nextNextNextBall){
    push()
    stroke(this.color)
    // line(this.pos.x,this.pos.y,_nextBall.pos.x,_nextBall.pos.y)
    //console.log(_nextNextBall.pos.x)''
    curve(this.pos.x,this.pos.y,_nextBall.pos.x,_nextBall.pos.y,_nextNextBall.pos.x,_nextNextBall.pos.y,_nextNextNextBall.pos.x,_nextNextNextBall.pos.y)
    pop()
  }
  
}