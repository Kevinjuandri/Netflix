// Fungsi untuk menangani pergerakan carousel
document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const leftBtn = container.querySelector('.left-btn');
    const rightBtn = container.querySelector('.right-btn');
  
    leftBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -300, // sesuaikan nilai scroll dengan kebutuhan
        behavior: 'smooth'
      });
    });
  
    rightBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: 300, // sesuaikan nilai scroll dengan kebutuhan
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("netflix-video");
    const audio = document.getElementById("netflix-audio");

    // Pastikan video dapat diputar
    let playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Video autoplay berhasil.");
            audio.play().catch(error => {
                console.log("Autoplay audio diblokir, memerlukan interaksi pengguna.", error);
            });
        }).catch(error => {
            console.log("Autoplay diblokir, memerlukan interaksi pengguna.", error);
        });
    }

    // Sinkronisasi audio dengan video
    video.onplay = () => audio.play();
    video.onpause = () => audio.pause();
    video.onseeked = () => audio.currentTime = video.currentTime;
    video.onended = function () {
        audio.pause();
    };
});



  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    
    // Daftar gambar yang akan digunakan
    const images = [
        "images/us.jpeg",      // Gambar 1
        "images/us2 (1).jpeg", // Gambar 2
        "images/us2 (2).jpeg"  // Gambar 3
    ];
    
    let currentIndex = 0;
    let direction = 1; // 1 = maju (kanan), -1 = mundur (kiri)

    function changeBackground() {
        banner.style.backgroundImage = `url('${images[currentIndex]}')`;
        banner.style.animation = "slide 1s ease-in-out"; // Tambahkan animasi

        // Jika mencapai gambar terakhir, ubah arah ke kiri
        if (currentIndex === images.length - 1) {
            direction = -1;
        } 
        // Jika kembali ke gambar pertama, ubah arah ke kanan
        else if (currentIndex === 0) {
            direction = 1;
        }

        // Geser indeks sesuai arah
        currentIndex += direction;
    }

    // Set background awal
    changeBackground();
    
    // Ganti gambar setiap 5 detik
    setInterval(changeBackground, 5000);
});
