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

const kissBtn = document.getElementById('kissBtn');
const kiss = document.getElementById('kiss');

kissBtn.addEventListener('click', () => {
  createLipstickKissRain();

  kiss.style.animation = 'none';
  kiss.offsetHeight; // força repaint
  kiss.style.animation = 'showKiss 1s forwards';

  setTimeout(() => {
    kiss.style.animation = 'none';
    kiss.style.opacity = 0;
  }, 3000);
});