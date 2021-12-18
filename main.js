function setup(){
    video=createCapture(VIDEO);
    video.size(600,550);
    canvas=createCanvas(650,600);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose net is initialized.");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background("#3269a8");
}