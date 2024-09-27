let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

// Toggle menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');  // Pass the class you want to toggle
    navbar.classList.toggle('active');
}

/*=== Scroll ===*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Highlight active section in navbar
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the menu when scrolling
    menuIcon.classList.remove('fa-xmark');  // Reset the icon class
    navbar.classList.remove('active');  // Hide the navbar
};

/*=== Scroll reveal ===*/

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });  // Fixed the selector
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*=== type js ===*/

const typed = new Typed('.multiple-text', {  // Ensure correct selector
    strings: [' Tech Enthusiast', 'Data-Driven Student ', 'AI/ML Explorer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 100,
    loop: true,
});