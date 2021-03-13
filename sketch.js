var surface1,surface2,surface3,sueface4;
var box;
var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1=createSprite(10,590,360,30);
   surface1.shapeColour="indigo";

   surface2=createSprite(30,590,360,30);
   surface2.shapeColour="orange";

   surface3=createSprite(50,590,360,30);
   surface3.shapeColour="pink";

   surface4=createSprite(70,590,360,30);
   surface4.shapeColour="yellow";   
    //create box sprite and give velocity
    box=createSprite(random(20,750),100,20,20);
    box.shapeColour="green";
    box.velocityX=4;
    box.velocityY=6;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceoff(edges);
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceoff(surface1)){
        box.shapeColour="indigo";
        box.bounceoff(edges);
        music.play();
    }
   
    if(surface2.isTouching(box)){
        box.shapeColour="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
       }
       
    if(surface3.isTouching(box) && box.bounceoff(surface3)){
        box.shapeColour="pink";
        box.bounceoff(edges);
        music.play();
    }
   
        if(surface4.isTouching(box) && box.bounceoff(surface4)){
        box.shapeColour="yellow";
        box.bounceoff(edges);
        music.play();
        }
        
        DrawSprites();
}

