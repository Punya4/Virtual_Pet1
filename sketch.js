var food;
var dog,sadDog,happyDog,database;
function preload()
{
	//load images here
  sadDog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(400,500,150,150);
  dog.addImage(sadDog);
  dog.scale=0.45;
  database.ref('food').on("value",readstock);

  
}


function draw() {  
  background("green")
if(keyDown("UP")){
  writestock(food)
  dog.addImage(happyDog);
}
  drawSprites();
  textSize(25)
  stroke("black")
  fill("red")
 text("PRESS UP_ARROW KEY TO FEED DRAGO MILK", 120,100)
text("FOOD STOCK : "+food,200,150);
}

function readstock(data){
  food=data.val();
}
function writestock(x) {
  if(x<=0){
    x=0;
  }
  else {
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

