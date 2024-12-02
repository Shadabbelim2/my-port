// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
    this.classList.toggle('open');
});

// Handle dropdown toggle on mobile
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default link behavior
        this.parentElement.classList.toggle('show'); // Toggle the "show" class on the parent <li>
    });
});


