function setup() {
  createCanvas(800, 600);
}

function draw() {
  // CONDIÇÃO 1: Posição do rato divide a Calmaria da Natureza (Esquerda) e o Caos Urbano (Direita)
  if (mouseX < width / 2) {
    // --- LADO ESQUERDO: AÇORES (CALMARIA E NATUREZA) ---
    if (keyIsPressed) {
      background(15, 40, 55, 30); 
    } else {
      background(190, 235, 225, 30); 
    }

    // Colina verde 
    noStroke();
    fill(45, 140, 90);
    ellipse(200, height, 400, 220);

    // Árvores simples
    fill(100, 65, 40); // Cor dos troncos
    rect(94, 470, 12, 40);  // Tronco 1 (Esquerda)
    rect(193, 445, 14, 50); // Tronco 2 (Centro)
    rect(294, 470, 12, 40); // Tronco 3 (Direita)

    fill(30, 115, 65); // Cor das copas das árvores
    ellipse(100, 455, 50, 50); 
    ellipse(200, 425, 65, 65); 
    ellipse(300, 455, 50, 50); 

    // Movimento lento e fluido (ondas da lagoa)
    let onda = sin(frameCount * 0.04) * 15;

    // CONDIÇÃO 2: Clique do rato altera as formas e cores na natureza
    if (mouseIsPressed) {
      // Clique: Flores e natureza a crescer suavemente
      noStroke();
      fill(60, 180, 100, 180);
      ellipse(mouseX, mouseY + onda, 75, 75);
      fill(120, 160, 255, 220); // Hortênsia azul
      ellipse(mouseX, mouseY + onda, 35, 35);
    } else {
      // Sem clique: Círculos calmos de água e brisa
      noFill();
      stroke(40, 150, 120, 180);
      strokeWeight(2);
      ellipse(mouseX, mouseY, 60 + onda, 60 + onda);
      ellipse(mouseX, mouseY, 30 - onda * 0.5, 30 - onda * 0.5);
    }

  } else {
    // --- LADO DIREITO: LISBOA (CAOS, PRÉDIOS E TRÂNSITO) ---
    if (keyIsPressed) {
      background(20, 15, 25, 80); // Noite urbana agitada
    } else {
      background(75, 80, 90, 80); // Cinzento urbano e poluição
    }

    // Silhueta dos prédios no fundo direito
    noStroke();
    fill(40, 42, 50);
    rect(420, 240, 65, 360);
    rect(500, 170, 85, 430);
    rect(600, 270, 55, 330);
    rect(670, 130, 95, 470);

    // Janelas dos prédios a piscar aleatoriamente
    fill(255, 230, 120, 200);
    rect(random(435, 740), random(160, 500), 12, 18);

    
    let carroX = random(width / 2, width - 45);
    let carroY = random(480, 580);
    fill(255, 40, 40); 
    rect(carroX, carroY, 35, 10);
    fill(255, 210, 0); 
    rect(carroX + 10, carroY - 20, 25, 8);

   
    let caosX = random(-12, 12);
    let caosY = random(-12, 12);

    
    if (mouseIsPressed) {
     
      stroke(255, 230, 0);
      strokeWeight(3);
      fill(255, 30, 30);
      rect(mouseX - 35 + caosX, mouseY - 35 + caosY, 70, 70);
    } else {
      // Sem clique: Viaturas/formas geométricas agitadas a seguir o rato
      stroke(20);
      strokeWeight(2);
      fill(255, 190, 0);
      rect(mouseX - 25 + caosX, mouseY - 15 + caosY, 50, 30);
    }
  }

  
  stroke(255, 255, 255, 180);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);
}