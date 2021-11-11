function setup() {
  createCanvas(600, 400);
  soundBackground.loop();
}

function draw() {
  background(imgRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  carInitialPosition();
  verifyCollide();
  showPoints();
  score();
}