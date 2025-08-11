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
    const intro = document.querySelector(".netflix-intro");
    const video = document.getElementById("netflix-video");
    const audio = document.getElementById("netflix-audio");
  
    // Coba putar video (yang mute) dan audio
    let videoPromise = video.play();
    let audioPromise = audio.play();
  
    if (videoPromise !== undefined) {
      videoPromise.catch(error => {
        console.log("Autoplay video mungkin diblokir:", error);
      });
    }
    if (audioPromise !== undefined) {
      audioPromise.catch(error => {
        console.log("Autoplay audio mungkin diblokir:", error);
      });
    }
  
    // Sinkronisasi audio dengan video
    video.onplay = () => {
      audio.currentTime = video.currentTime;
      audio.play().catch(err => console.log(err));
    };
    video.onpause = () => audio.pause();
    video.onended = function () {
      // Sembunyikan intro setelah video selesai
      intro.classList.add("hide-content");
      setTimeout(() => {
        intro.style.display = "none";
      }, 1000);
    };
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    
    // Daftar gambar yang akan digunakan
    const images = [
        "imagesN/us.jpeg",      // Gambar 1
        "imagesN/us2 (1).jpeg", // Gambar 2
        "imagesN/us2 (2).jpeg"  // Gambar 3
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

document.getElementById("playButton").addEventListener("click", function() {
  var video = document.getElementById("catVideo");
  var audio = document.getElementById("bgMusic");
  var container = document.getElementById("video-container");

  container.style.display = "block"; // Tampilkan video
  video.currentTime = 0; // Reset ke awal
  audio.currentTime = 0;
  video.play();
  audio.play();
});

// Sembunyikan video setelah selesai
document.getElementById("catVideo").addEventListener("ended", function() {
  document.getElementById("video-container").style.display = "none";
});