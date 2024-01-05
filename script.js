$(document).ready(function() {

    // Handling scroll for navbar and anchor elements
    //select the nav bar and anchor link to be affected
    const navbar = $('#divScroll')
    const navlink = $('.anchor')

    //function to handle scroll event 
    $(window).scroll(function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            // divScroll.classList.add('bg-white');
            navbar.addClass('bg-white transition-all')
            navlink.removeClass('text-white').addClass('text-black')
            
        } else {
            navbar.removeClass('bg-white transition-all');
            navlink.removeClass('text-black').addClass('text-white')
        }
        
    });

    // Get references to the image elements
    const originalImage = $('#original-image');
    const replacementImage = $('#replacement-image');

    // Function to handle scroll event
    $(window).scroll(function() {
        // Check if the scroll position is greater than a certain value (adjust as needed)
        if ($(this).scrollTop() > 0) {
            // Replace the original image with the replacement image
            originalImage.hide();
            replacementImage.show();
        } else {
            // Show the original image and hide the replacement image
            originalImage.show();
            replacementImage.hide();
        }
    });
    // Function to handle scroll event for am element class
    const anchorElement = $('.anchor');
    $(window).scroll(function(){
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            //Replace the original text color of the class anchor to black
            anchorElement.removeClass('text-white').addClass('text-black');
        } else{
            //and if the original scroll position is 0 then the original color holds it color
            anchorElement.removeClass('text-black').addClass('text-white')
        }
    });

        // Scroll event for button element
    const buttonElement = $('.button1');
    $(window).scroll(function() {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 0){
            buttonElement.removeClass('bg-white').addClass('bg-red-700');
            buttonElement.removeClass('text-black').addClass('text-white');
        }else{
            buttonElement.removeClass('bg-red-700').addClass('bg-white');
            buttonElement.removeClass('text-white').addClass('text-black');
        }
    });
});