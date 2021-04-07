song = "";
canvas="";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload() {
    song = loadSound("song1.mp3");
    song = loadSound("song2.mp3");
}
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){

}
function modelLoaded(){
    console.log("Pose net is initialized");
}
function gotPoses(results){
    if (results.length > 0){
     console.log(results);
    }
}