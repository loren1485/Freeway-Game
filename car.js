// Cars Code

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.7, 3.5, 4, 4.5, 3];
let widthCars = 50;
let heightCars = 40;

function showCar() {
  for (let i = 0; i < imgCars.length; i++) {
    image(imgCars[i], xCars[i], yCars[i], widthCars, heightCars);
  }
}

function moveCar() {
  for (let i = 0; i < imgCars.length; i++) {
   xCars[i] -= speedCars[i]; 
  }
}

function carInitialPosition() {
  for (let i = 0; i < imgCars.length; i++) {
    if (crossedScreen(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

function crossedScreen(xCar) {
  return xCar < - 50;
}



