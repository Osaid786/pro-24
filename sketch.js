var paper,ground,box1,box2,box3;

const Engine=Matter.Engine;
const World=Matter.Engine;
const Bodies=Matter.Bodies
const Body=Mater.Body

var ground_options,groundBody;
var box1_options,box1Body;
var box2_options,box2Body;
var box3_options,box3Body;
var paper_options,paperBody;

function setup() {
	createCanvas(800,700)
    

	ground=createSprite(400,690,800,30)
	box1=createSprite(500,670,200,20)
	box1.shapeColor=color(225)
	box2=createSprite(400,580,20,200)
	box2.shapeColor=color(225)
	box3=createSprite(600,580,20,200)
	box3.shapeColor=color(225)
	paper=createSprite(100,660,40,40)
	paper.shapeColor=color(200)

	


}

function draw(){
	background(0)
  
	drawSprites();
}