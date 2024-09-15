document.querySelector('.menu-icon').addEventListener('click', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('mobile-header');
    this.classList.toggle('fa-x')
});

document.getElementById("contactForm").addEventListener("submit", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener('submit', function () {
        form.classList.add('hidden');

        // Show thank you message with fade-in effect
        const thankYou = document.getElementById("thankYou");
        thankYou.classList.add('fade-in');
    });
});

// Check local storage on page load
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.documentElement.classList.add('dark-mode');
    }
};

function toggleInvert() {
    const link = document.getElementById("cvLink");
    link.href = link.href.endsWith("Themed-CV-dark.pdf") ? "Themed-CV-light.pdf" : "Themed-CV-dark.pdf";
    document.documentElement.classList.toggle('dark-mode');
    
    // Save the preference to local storage
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
}

window.addEventListener('scroll', () => {
    // Select both divs with IDs and the section element
    const sections = document.querySelectorAll('div[id], section[id]');  
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

let cards = document.querySelectorAll('.cards');
cards.forEach(card => {
    card.onmousemove = function(e){
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
        card.style.setProperty('--bsX', x*0.05 + 'px');
        card.style.setProperty('--bsY', y*0.05 + 'px');
    }
});