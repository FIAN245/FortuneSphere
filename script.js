const sphere = document.getElementById('sphere');
const quote = document.getElementById('quote');

const quotes = [
 "Percayalah pada dirimu sendiri.",
  "Setiap hari adalah awal yang baru.",
  "Hal baik membutuhkan waktu.",
  "Kebahagiaan berawal dari hati.",
  "Keberanian bukanlah ketiadaan rasa takut.",
  "Petualangan menanti mereka yang berani.",
  "Langkah kecil bisa membawa perubahan besar.",
  "Keberuntungan berpihak pada yang berusaha.",
  "Kesabaran adalah kunci dari segalanya.",
  "Masa depanmu ditentukan oleh apa yang kau lakukan hari ini.",
  "YNTKTS.",
  "Hdp Jkw.",
  "Jadiginile."
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
