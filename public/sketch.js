function preload(){
  // put preload code here
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight)

//for making connection with the server
  socket = io();

// in the setup i am definig if we have a new connect(
  socket.on("mouseBroadcast", newDrawing);

  function newDrawing(receivedData){
    fill("blue")
    ellipse(receivedData.x, receivedData.y, 10);
  }

  background("black");



}

function draw() {
  //ellipse(mouseX,mouseY,30)
}

function mouseDragged() {
  fill("peachPuff");
  ellipse(mouseX,mouseY,40)

  var sendData = {
    x:mouseX,
    y:mouseY
  }

  socket.emit("mouse", sendData);
}
