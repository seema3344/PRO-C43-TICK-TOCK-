
var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(displayWidth,displayHeight); 
    textSize(30);
angleMode(DEGREES);   
}

function draw(){
    background(0);
      
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    fill(255,254,254);
    stroke(243,180,120);
    text(hr + ':'+ mn + ':' + sc , 450,550 );
    
    fill (255,0,0);
    stroke(255,255,255);
    strokeWeight(2);
    //text("Red hand represents seconds, green represents mins,blue represents hours", 200,200);
    text("Red", 200,200);
    
    fill (255,255,0);
    noStroke();
    //stroke(255,255,255);
    //strokeWeight(4);
    text("hand represents seconds",280,200);

    fill (0,255,0);
    stroke(255,255,255);
    strokeWeight(2);
    //text("Red hand represents seconds, green represents mins,blue represents hours", 200,200);
    text("Green", 200,250);
    
    
    fill (255,255,0);
    noStroke();
    text("hand represents seconds",290,250);
    
    fill (0,0,255);
    stroke(255,255,255);
    strokeWeight(2);
    text("Blue", 200,300);

    fill (255,255,0);
    noStroke();
    text("hand represents seconds",280,300);

    translate(500,500);
    rotate(-90);
    
    
  
    
    
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

   
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

  
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()


    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)


    strokeWeight(10);
    noFill();
    
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);

    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    stroke (255);
    point(0,0);
}
