img="";
status="";
objects=[];

function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
 canvas=createCanvas(640,420);
 canvas.center();
 objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,640,420);
    // fill("#03fcdb");
    //text("dog",110,100);
    //stroke("#03fcdb");
    //noFill();
    //rect(99,55,300,350);
     //fill("#03fcdb");
    //text("cat",350,120);
    //stroke("#03fcdb");
    //noFill();
    //rect(300,95,270,290);
    //fill("#03fcdb");
    //text("bowl",300,310);
    //stroke("#03fcdb");
    //noFill();
    //rect(270,290,150,130);
    if(status!=""){
        for (i=0; i< objects.length; i++){
            document.getElementById("status").innerHTML="status:detection done";
            fill("#03fcdb");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+" %",objects[i].x+15,objects[i].y+15);
            stroke("#03fcdb");
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
          
        }
    }
}