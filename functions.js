function createBalloon(){
  balloon = new Balloon(Math.random()*450+15, Math.random()*350+200, Math.round(Math.random()*3)+1);
}


function fireArrow(){
  arrow = createSprite(500,bow.y,5,30);
  arrow.addImage("arrow", arrowImage);
  arrow.scale = 0.375;
  arrow.velocityX = -10;
}