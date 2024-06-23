function setup() {
  createCanvas(600, 550);
 }
 let t=1;

let rot=0;
let speed=0.0001;
function draw() {
  background('black');
  
  let x= height/25+mouseX*2; 
 let y= width/30;
  let j=0;
  let i=0;

   while(y< (width+height)/2 && i<x && j<y){
         stroke(2.5);
   translate(x/15,y/4);
 rotate(rot+=speed);
     stroke('rgb(237,205,243)');
     line(width/((i*100)), sin(height/j)-cos(x),         width+height*j/2,height*2*j/3);
     
     let d= sqrt(mouseX*PI+ mouseY*mouseY);
    //rect(d+d, d, sin(d/j)-cos(x),d*2*j/3);
     
     fill(random(255),random(255),random(245),random(205));
     
for(let r=0; r<9*i; r++){
        moves(i,j);
     }
     
     move2(i,j);
     i+=1;
     j+=1;
   } 
  
  
  t+=0.5;
}

function moves(i,j){ 
  //translate(j,i);
 // rotate(rot+=speed);
  stroke(random(255),random(255),random(135),random(105));
    strokeWeight(2);
  let ta= sin(i*120)/cos(i*130);
        line( width*j/2-ta, height/2-i*j/10,(j/i*5), 0.7*j);
  
  
}


function move2(i,j){
  stroke('#E2DAE6');
  //translate(i/20,j/100);
 // rotate(rot+=speed);
      line( width*j, height/2-i*j/10,(j/i*5), 0.7*j);
     
     fill(random(230),random(255),random(255),random(225));
}
}


function move2(i,j){
  stroke('#9A11DB');
  //translate(i/20,j/100);
 // rotate(rot+=speed);
      line( width*j, height/2-i*j/10,(j/i*5), 0.7*j);
     
     fill(random(230),random(255),random(255),random(225));
}
