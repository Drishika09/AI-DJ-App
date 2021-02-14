song = "";
canvas="";
function preload() {
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    image(canvas,0,0,600,400);
}
function draw(){
    
}
