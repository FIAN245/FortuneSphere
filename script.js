const sphere = document.getElementById('sphere');
const quote = document.getElementById('quote');

const quotes = [
  "Believe in yourself!",
  "Every day is a new beginning.",
  "Good things take time.",
  "Happiness is homemade.",
  "Courage is not the absence of fear.",
  "Adventure awaits those who seek it.",
  "Small steps can lead to big changes.",
  "Fortune favors the brave."
];

sphere.addEventListener('click', () => {
  // pilih kutipan acak
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // animasi fade-out dulu
  quote.style.opacity = 0;

  // setelah 300ms baru ganti text dan fade-in
  setTimeout(() => {
    quote.textContent = randomQuote;
    quote.style.opacity = 1;
  }, 300);

  // animasi goyang bola
  sphere.style.transform = `rotate(${Math.random()*360}deg) scale(1.2)`;
  setTimeout(() => {
    sphere.style.transform = 'rotate(0deg) scale(1)';
  }, 500);
});
