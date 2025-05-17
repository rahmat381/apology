
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  document.getElementById('heartsContainer').appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}
