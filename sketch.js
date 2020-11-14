//Create variables here
var dog , happyDog;
var database;
var foodS , foodStock
var dogImg;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  drawSprites();
  textSize(20);
  fill("white");
  stroke("black");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",25,50);
  text("Food Remaining: "+foodS,25,100);
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
}
function writeStock(x){
  
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })
  
}
function readStock(data){
  foodS = data.val();
}






