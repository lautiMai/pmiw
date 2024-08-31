// Lautaro Maidana, comision 3, legajo: 121133/6
//link video explicativo: https://youtu.be/9J7LeISxTlI
let cant = 20;
let cant2 = 20;
let tamx;
let tamx2 = 800 / cant;
let color1;
let imagen;

function preload() {
  imagen = loadImage("data/F_42.png"); 
}

function setup() {
  createCanvas(800, 400);
  tamx = 800 / cant;
  color1 = 100;
}

function draw() {
  background(255);
  ImagenDeReferencia();
  dibujo();
}

function ImagenDeReferencia() {
  image(imagen, 0, 0, 400, 400);
}

function dibujo() {
  for (let x = 10; x < cant; x++) { 
    for (let y = 0; y < cant; y++) {
      if ((x + y) % 2 == 0) {
        fill(100, 0, 0);
      } else {
        fill(200, 0, 0);
      }
      
      if (mouseIsPressed) {
        let colorRandom = unColor();
        fill(colorRandom);
      }
      
      rect(x * tamx, y * tamx, tamx, tamx);
    }
  }

  for (let cx = 10; cx < cant2; cx++) {
    for (let cy = 0; cy < cant2; cy++) {
      fill(map(cy, 0, cant2 - 1, 255, 0), color1, map(cx, 0, cant2 - 1, 0, 255));
      noStroke();
      let distancia = dist(mouseX, mouseY, cx * tamx2, cy * tamx2);
      ellipse(cx * tamx2 + 20, cy * tamx2 + 20, distancia / 25, distancia / 25);
    }
  }
}

function unColor() {
  return color(random(255), random(255), random(255)); 
}
