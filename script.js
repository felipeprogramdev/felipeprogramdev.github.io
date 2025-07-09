// Função para criar chuva de beijos 💋
function createLipstickKissRain() {
  const kissEmoji = '💋';
  for (let i = 0; i < 50; i++) {
    const kiss = document.createElement('div');
    kiss.textContent = kissEmoji;
    kiss.style.position = 'fixed';
    kiss.style.top = '-50px';
    kiss.style.left = Math.random() * window.innerWidth + 'px';
    const size = 15 + Math.random() * 30;
    kiss.style.fontSize = size + 'px';
    kiss.style.opacity = 0.9;
    kiss.style.zIndex = 30;
    kiss.style.userSelect = 'none';
    kiss.style.pointerEvents = 'none';
    kiss.style.animationName = 'fallLipstickKiss';
    kiss.style.animationDuration = (3 + Math.random() * 3) + 's';
    kiss.style.animationTimingFunction = 'linear';
    kiss.style.animationFillMode = 'forwards';
    kiss.style.animationIterationCount = '1';

    document.body.appendChild(kiss);

    kiss.addEventListener('animationend', () => kiss.remove());
  }
}

// Função para criar textos românticos flutuando pela tela
function createFloatingTexts() {
  const messages = [
    "Te amo 💖",
    "Você é meu mundo 🌍",
    "Feliz Nivessário 🎉",
    "Linda demais 😍",
    "Meu presente 🎁",
    "Você é luz ✨",
    "Razão do meu sorriso 😊",
    "Minha vida é mais doce com você 🍯",
    "Minha princesa 👑"
  ];

  for (let i = 0; i < 10; i++) {
    const text = document.createElement('div');
    text.textContent = messages[Math.floor(Math.random() * messages.length)];
    text.style.position = 'fixed';
    text.style.left = Math.random() * 90 + 'vw';
    text.style.top = Math.random() * 80 + 'vh';
    text.style.fontSize = (14 + Math.random() * 10) + 'px';
    text.style.color = '#fff5f8';
    text.style.textShadow = '1px 1px 3px #000';
    text.style.opacity = 0;
    text.style.zIndex = 20;
    text.style.transition = 'opacity 1s ease';

    document.body.appendChild(text);

    // Aparece suavemente
    setTimeout(() => {
      text.style.opacity = 1;
    }, 100);

    // Desaparece e é removido
    setTimeout(() => {
      text.style.opacity = 0;
      setTimeout(() => text.remove(), 1000);
    }, 4000 + Math.random() * 2000);
  }
}

// Seleciona botão e emoji fixo
const kissBtn = document.getElementById('kissBtn');
const kiss = document.getElementById('kiss');

// Ao clicar no botão
kissBtn.addEventListener('click', () => {
  // Inicia a chuva de beijos
  createLipstickKissRain();

  // Mostra os textos carinhosos
  createFloatingTexts();

  // Animação do beijo fixo
  kiss.style.animation = 'none';
  kiss.offsetHeight; // força repaint para reiniciar a animação
  kiss.style.animation = 'showKiss 1s forwards';

  // Some após 3 segundos
  setTimeout(() => {
    kiss.style.animation = 'none';
    kiss.style.opacity = 0;
  }, 3000);
});
