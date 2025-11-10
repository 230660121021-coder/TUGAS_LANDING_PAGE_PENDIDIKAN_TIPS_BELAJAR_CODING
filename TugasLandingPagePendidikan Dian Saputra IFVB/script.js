document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector(".header");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = hamburger.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars"); 
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                const icon = hamburger.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Harap isi semua kolom yang wajib diisi!");
        } else {
            alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
            contactForm.reset();
        }
    });

    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

});


const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});