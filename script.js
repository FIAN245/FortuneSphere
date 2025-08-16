const sphere = document.getElementById('sphere');
const quote = document.getElementById('quote');

const quotes = [
 "Percayalah pada dirimu sendiri.",
"Setiap hari adalah awal yang baru.",
"Hal baik membutuhkan waktu.",
"Kebahagiaan berawal dari hati.",
"Masa depanmu ditentukan oleh hari ini.",  
"Gas terus, jangan banyak alasan!",
"Kalau capek istirahat, jangan menyerah.",
"Mimpi besar dimulai dari langkah kecil.",
"Belajar itu berat, tapi nggak belajar lebih berat.",
"Sukses itu hasil dari konsistensi kecil tiap hari.",
"Nasi padang adalah solusi dari semua masalah.",
"Tidur sebentar = bangun besok pagi.",
"WiFi kenceng lebih bikin bahagia daripada mantan.",
"Hdp Jkw.",
"“JadiGiniLe.",
"YNTKTS.",
"My Favorite Musik Gue.",
"Mikir keras malah lapar.",
"Air galon lebih setia daripada pacar.",
"Santuy aja bro, dunia nggak kemana-mana.",
"Gaskeun sebelum di-gas orang lain.",
"Nggak usah panik, semua masih bisa di-restart.",
"Rebahan itu hak asasi manusia.",
"Jangan lupa bahagia, biar nggak jadi npc."

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
