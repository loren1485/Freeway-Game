let imgRoad;
let imgActor;
let imgCar1;
let imgCar2;
let imgCar3;

let soundBackground;
let soundCollide;
let soundScore;

function preload() {
  imgRoad = loadImage("img/estrada.png");
  imgActor = loadImage("img/ator-1.png");
  imgCar1 = loadImage("img/carro-1.png");
  imgCar2 = loadImage("img/carro-2.png");
  imgCar3 = loadImage("img/carro-3.png");
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3];
  
  soundBackground = loadSound("sounds/trilha.mp3");
  soundCollide = loadSound("sounds/colidiu.mp3");
  soundScore = loadSound("sounds/pontos.wav");
}