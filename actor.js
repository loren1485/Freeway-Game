//Actor
let xActor = 100;
let yActor = 366;
let hit = false;
let myPoints = 0;

function showActor() {
  image(imgActor, xActor, yActor, 30, 30);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (movementAllowed())
      yActor += 3
  }
} 

function verifyCollide() {
  for (let i = 0; i < imgCars.length; i++) {
    hit = collideRectCircle(xCars[i], yCars[i], widthCars, heightCars, xActor, yActor, 15);
    if (hit) {
      actorInitialPosition();
      soundCollide.play();
      if (biggerThanZero())
        myPoints -= 1;
    }
  }
}

function actorInitialPosition() {
  yActor = 366;
}

function showPoints() {
  textAlign(CENTER);
  textSize(25)
  fill(255, 240, 60)
  text(myPoints, width / 5, 27);
}

function score() {
  if (yActor < 15) {
    myPoints += 1;
    soundScore.play();
    actorInitialPosition();
  }
}

function biggerThanZero() {
  return myPoints > 0;
}

function movementAllowed() {
  return yActor < 366;
}
