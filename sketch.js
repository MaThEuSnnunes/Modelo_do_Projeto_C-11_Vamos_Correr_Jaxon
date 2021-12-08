var pathimg;
var boyImg,boy;
var path;

function preload(){
  pathimg = loadImg ("path.img");
  boyImg = loadAnimation ("Runner-1.png","Runnner-2.png");
  
}

function setup(){
  createCanvas(400,400);
 path = createsSprite (200,200)
 path.addImage (pathimg)
  path.velocityY = 4; path.scale = 1.2;
  boy = createSprite(180,340,30,30); 
  boy.scale=0.08; boy.addAnimation("JakeRunning",boyImg); 
  leftBoundary=createSprite(0,0,100,800); 
  leftBoundary.visible = false; 
  rightBoundary=createSprite(410,0,100,800); 
  rightBoundary.visible = false;
} 
function draw()
{ background(0); 
  path.velocityY = 4;
  boy.x = World.mouseX; 
  edges= createEdgeSprites();
  boy.collide(edges[3]); 
  boy.collide(leftBoundary); 
  boy.collide(rightBoundary);
  drawSprites ()

}
