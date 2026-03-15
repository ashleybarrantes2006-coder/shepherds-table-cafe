//----JAVA SCRIPT ITS OWN WEB SECTION-----//

// This wrapper is the "Wait!" command for the browser
document.addEventListener('DOMContentLoaded', function(){//----1# HAMBUGER SECTION - Responsive Navigation ----///

    // 1. Find the hamburger button (the three bars)
    const menu = document.querySelector('#mobile-option-menu');
    // 2. Find the actual list of links (Your HTML uses "nav-links")
    const menuLinks = document.querySelector('.nav-links'); 

    menu.addEventListener('click', function () {
        // This toggles the 'active' class on the hamburger bars (for animations)---> so the CSS is told to activate iitself by js click 
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active'); // This shows/hides your nav links
        // This toggles the 'active' class on the actual menu so it slides down/appears

    });
    
//-------------2#- Security/ Form Validation -----------> 

    // Ai assisted in coorecting element(like trim that didnt work until i told it too T-T) & in the if ( like example, I forgot I could use tge empty " ", to check if something is added, no need the if something IN something like in python)//

    const reservationForm = document.querySelector('.reservation-form');
    
    if (reservationForm){
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the page from refreshing

            // Clear previous errors
            document.getElementById('nameError').textContent = "";

            const firstName = document.getElementById('firstName').value.trim();
            let isValid = true;
            // trim meaning: "This is a "clean-up" tool. It removes accidental spaces at the beginning or end (like if a user accidentally hits the spacebar before typing)."
            
            //name check
            if (firstName === "") {
                document.getElementById('nameError').textContent = "Please enter your first name.";
                isValid = false;
            }

            //it triggers the "Success" alert if the "flag" is correct/ still true
            if (isValid) {
                alert("Success! Your table at Shepherd's Table is held.");
                reservationForm.reset();
            }
            
            // Adding for mail under firstName check:
            const email = document.getElementById('email').value.trim();
            if (!email.includes("@")) {
                alert("Please enter a valid email address."); // Or use a span like you did for name!
                isValid = false;}
        }); // <--- FIXED: Closed the listener properly
    }

    //------------3# Back to top botton --------> tried to follow tutorial from Frabio Musanni :D for css as well//

    //1-grabbing fron the id the botton:
    const topBtn = document.querySelector('#backToTop');
    //2-making a "listen" attribute for when the user scrolls --> sees and activates when the user are reaching down the window  //
    if (topBtn) {
            window.addEventListener('scroll', function() {
                // If user scrolls down more than 900px, show the button, placed at a range that user can see most of the pages and go back up smoothly.
                if (window.scrollY > 900) {
                    topBtn.classList.add('show-btn');
                } else {
                    topBtn.classList.remove('show-btn');
                }
            });

            topBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
             });
        });
       
    }


    //-----------Dynamic Content Rendering-----//





    //----------- Accordion or T abbed Content -----//

});   // <--- This closes the DOMContentLoaded "Wait!" command



//Definition + example about what is the point of document.addEventListener('DOMContentLoaded', ...)?

    //Think of your browser like a person reading a book (your HTML). 
    // By default, if the person sees a "sticky note" (your JavaScript) at the top or middle of the book,
    //  they stop reading the story to follow the note's instructions.

    //The Problem: If the note says "Color the sheep purple," 
    // but the person hasn't reached the page with the sheep yet, they will get confused and give up.
    
    // The Solution: DOMContentLoaded is a "Wait!" command. It tells the JavaScript:
    //  "Do not look for any buttons, forms, or menus until the browser has finished reading the entire HTML structure."

    //Without it, your script often returns null errors because it's looking for elements that don't exist in the browser's memory yet.
