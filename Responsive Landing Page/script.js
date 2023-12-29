document.addEventListener("DOMContentLoaded", function() {
    // Variables
    var navbar = document.getElementById("navbar");
    var navLinks = document.querySelectorAll(".nav-list a");

    // Change navbar style on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });

    // Change nav link style on hover
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("mouseenter", function() {
            this.style.color = "#ff9900";
        });

        navLink.addEventListener("mouseleave", function() {
            this.style.color = "#fff";
        });
    });
});
