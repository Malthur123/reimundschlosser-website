document.addEventListener('DOMContentLoaded', () => {

    // Get the hamburger button and the main navigation
    const hamburger = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Add a click event listener to the hamburger button
    hamburger.addEventListener('click', () => {
        // Toggle the 'is-active' class on the main navigation
        mainNav.classList.toggle('is-active');
    });

});