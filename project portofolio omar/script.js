
    const hamburger = document.getElementById("hamburger");  
    const mobileNav = document.getElementById("mobileNav");  
  
    hamburger.addEventListener("click", () => {  
      hamburger.classList.toggle("active");  
      mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";  
    });  
  
    // Navbar shrink  
    window.addEventListener("scroll", () => {  
      document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);  
    });  
  
   // Fade tiap kali masuk viewport
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // masuk → fade in
    } else {
      entry.target.classList.remove("show"); // keluar → reset (biar bisa fade lagi)
    }
  });
}, { threshold: 0.2 }); // 20% keliatan baru trigger

sections.forEach(sec => observer.observe(sec));

  
    // Cursor (non-touch only)  
    const cursor = document.querySelector(".cursor");  
    if (window.matchMedia("(pointer: fine)").matches) {  
      document.addEventListener("mousemove", e => {  
        cursor.style.top = e.clientY + "px";  
        cursor.style.left = e.clientX + "px";  
      });  
    }  
  
    // Progress bar  
    const progressBar = document.querySelector(".progress-bar");  
    window.addEventListener("scroll", () => {  
      const scrollTop = window.scrollY;  
      const height = document.body.scrollHeight - window.innerHeight;  
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;  
      progressBar.style.width = progress + "%";  
    });  
  
    // Typing effect  
    const text = "it's OMMI time";  
    let i = 0;  
    (function typingEffect(){  
      if (i < text.length) {  
        document.getElementById("typing").innerHTML += text.charAt(i);  
        i++;  
        setTimeout(typingEffect, 100);  
      }  
    })();  
    // Modal Project 1  
const project1 = document.getElementById("project1");  
const modal1 = document.getElementById("modalProject1");  
const closeModal = document.getElementById("closeModal");  
  
project1.addEventListener("click", () => {  
  modal1.style.display = "flex";  
});  
  
closeModal.addEventListener("click", () => {  
  modal1.style.display = "none";  
});  
  
// Tutup modal kalo klik di luar konten  
window.addEventListener("click", (e) => {  
  if (e.target === modal1) {  
    modal1.style.display = "none";  
  }  
});  
// Modal Project 2
const project2 = document.getElementById("project2");
const modal2 = document.getElementById("modalProject2");
const closeModal2 = document.getElementById("closeModal2");

project2.addEventListener("click", () => {
  modal2.style.display = "flex";
});

closeModal2.addEventListener("click", () => {
  modal2.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.style.display = "none";
  }
});
// Biar tiap slide bisa expand kalau diklik
document.querySelectorAll(".slide").forEach(slide => {
  slide.addEventListener("click", () => {
    slide.classList.toggle("active");
  });
});
// Modal Project 3 (AXO)
const project3 = document.getElementById("project3");
const modal3 = document.getElementById("modalProject3");
const closeModal3 = document.getElementById("closeModal3");

project3.addEventListener("click", () => {
  modal3.style.display = "flex";
});

closeModal3.addEventListener("click", () => {
  modal3.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal3) {
    modal3.style.display = "none";
  }
});
