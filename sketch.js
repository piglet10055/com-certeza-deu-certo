var caixa;






function setup() {
  createCanvas(400,400);
  caixa = createSprite(100,100,20,20);
}

function draw() 
{
  background(30);

  if (KeyIsDown(LEFT_ARROW)){
    caixa.position.x = caixa.position.x +3;

  }

  drawSprites();





}


