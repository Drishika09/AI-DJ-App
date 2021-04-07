song = "";
canvas="";
function preload() {
    song = loadSound("song1.mp3");
    song = loadSound("song2.mp3");
}
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){

}
