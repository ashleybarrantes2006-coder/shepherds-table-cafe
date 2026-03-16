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


    //-----------Dynamic Content Rendering---------//

    // credits to: Bro code, Java Script info page, coding2GO, Mdn_Dom doc load event that told me as well to add it on top for all of this so the hole doc should be added TvT...//

    // what the purpose of thgis section = Dynamic Content Rendering is a fancy way of saying: "Updating the website's content on the fly without making the user refresh the page."
    
    //Aka: static content: rendering things att build time = means like in an analogy from goolechrome search : the "food" is prepared, packaged, and put on a shelf before the customer even walks in.
        //How it works: You write the HTML and CSS, save the file, and upload it.
        //The Result: Every person who visits sees the exact same thing. It never changes unless you (the developer) go back into the code, change it, and "re-build" (re-upload) the site.
    
    //Dynamic = rendering things on request time = meaning  in same analogy: the "food" is cooked only after the customer places an order.
        //how it works: The browser (or server) waits for the user to do something—like click a button, type a name, or log in. Only then does the code "generate" the HTML.
        //he Result: The page is unique to that specific moment or user.

    //Rendering" basically means "drawing on the screen." When your JS changes the size, the browser has to "re-draw" (re-render) that image at the new scale.

    //Ai helped me look for the meanning of each sect so i can understand what they actually do and if they really have to be there..:)//
    // 1. Grab the elements from the DOM
    const radioFirst = document.getElementById('first');
    const radioSecond = document.getElementById('second');
    const guideImg = document.querySelector('.guide-image img');

    // 2. Add the Event Listeners (The triggers)
    if (radioFirst && radioSecond && guideImg) {
        radioFirst.addEventListener('change', updateImageEffect);
        radioSecond.addEventListener('change', updateImageEffect);
    }
    function updateImageEffect() {
    if (radioFirst.checked) {
        guideImg.style.transform = "scale(1.15)";
        // DYNAMIC CONTENT: Swap the image source
        guideImg.src = "images/sheep and lambs-img.webp"; 
    } else if (radioSecond.checked) {
        guideImg.style.transform = "scale(1.05) rotate(2deg)";
        // DYNAMIC CONTENT: Swap image for the "Meadow" section
        guideImg.src = "images/green-Olives-medow.webp"; 
    }}



    //----------- Accordion or T abbed Content -----//

    // This allows a user to uncheck a radio button by clicking it again
    //Ai assisted on helping me with the => js since before I was mixing the brakets type...
    
    //------what does this do-close again if the user touches it back again-----//
    document.querySelectorAll('.accordion input[type="radio"]').forEach((radio) => {
        radio.addEventListener('click', (e) => {
            if (radio.dataset.wasChecked === 'true') {
                radio.checked = false;
                radio.dataset.wasChecked = 'false';
            } else {
                // Reset others
                document.querySelectorAll('.accordion input[type="radio"]').forEach(r => r.dataset.wasChecked = 'false');
                radio.dataset.wasChecked = 'true';
            }
        });
    });



    

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
