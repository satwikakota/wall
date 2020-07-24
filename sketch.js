var fixedRect, movingRect, horizontalDistance, verticalDistance,s;  
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50); 
  fixedRect.shapeColor="green"; 8
  movingRect=createSprite(400, 200, 50, 50); 
  movingRect.shapeColor="green"; 
  s=createSprite(200,200,50,50);
  s.shapeColor="pink"; 
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX; 
  movingRect.y=mouseY; 
  s.x=mouseX; 
  if(istouching(movingRect,fixedRect)){
       movingRect.shapeColor="blue"; 
       fixedRect.shapeColor="blue"; 
  }else if(istouching(s,fixedRect)){
    s.shapeColor="brown";
    fixedRect.shapeColor="orange"; 
  }
  else if(istouching(movingRect,s)){
    movingRect.shapeColor="yellow"; 
    s.shapeColor="green";
  }
  else{
    movingRect.shapeColor="green"; 
    fixedRect.shapeColor="green"; 
    s.shapeColor="pink"; 
  }
  
  drawSprites();
}
function istouching(v1,v2){
  horizontalDistance=v1.width/2+v2.width/2;
  verticalDistance=v1.height/2+v2.height/2;  
  if(v1.x-v2.x<= horizontalDistance
    && v2.x-v1.x<=horizontalDistance
     && v1.y-v2.y<= verticalDistance 
     && v2.y-v1.y<= verticalDistance){
        return true; 
     }else{
       return false; 
     }

}