//Create variables here
var dog,happyDog,foodS,FoodStock;
var database;
function preload()
{
  //load images here
  dog1.loadImage="dog1mg.png"
}

function setup() {
	createCanvas(500, 500);
  FoodStock=datBase.ref("food");
  FoodStock.on("value",readStock);s
}


function draw() { 
  background(46,139,87);
  if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
    
}

  drawSprites();
  //add styles here

}



