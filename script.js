// Tanggal target
const targetDate = new Date("2025-09-17T00:00:00");

// Fungsi countdown
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    // Sudah waktunya
    document.getElementById("countdown").textContent = "Asikkk kamu udah ulang tahun🎉";
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
      `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }
}

// Tampilkan main content
function showMainContent() {
  document.getElementById("countdown-section").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.body.style.backgroundImage = "none";
}

// Event saat tombol diklik
document.getElementById("continue-button").addEventListener("click", function () {
  const now = new Date();
  const message = document.getElementById("wait-message");

  if (now >= targetDate) {
    showMainContent();
  } else {
    message.style.display = "block"; // Tampilkan pesan peringatan
  }
});

// Jalankan countdown saat halaman dibuka
window.onload = function () {
  updateCountdown();
  setInterval(updateCountdown, 1000);
};

// Fungsi untuk modal gambar
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("image-caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.getAttribute("data-caption");
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


