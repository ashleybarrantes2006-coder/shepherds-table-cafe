//----JAVA SCRIPT ITS OWN WEB SECTION-----//

// 1. Find the hamburger button (the three bars)
const menu = document.querySelector('#mobile-option-menu');

// 2. Find the actual list of links (Your HTML uses "nav-links")
const menuLinks = document.querySelector('.nav-links'); 

menu.addEventListener('click', function () {
    // This toggles the 'active' class on the hamburger bars (for animations)---> so the CSS is told to activate iitself by js click 
    menu.classList.toggle('active');
    
    // This toggles the 'active' class on the actual menu so it slides down/appears
    menuLinks.classList.toggle('active'); //---> this will go acroos the page!
});