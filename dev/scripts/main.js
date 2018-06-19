console.log("js file loads");

//Smooth Scroll JS
$(function () {
    // Add smooth scrolling to all links

    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery’s animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


//Hamburger Menu Controls
let showMenu = false;

$('.hamburger').on('click', function(e){
    if(showMenu){
        $('.fas').removeClass('fa-times').addClass('fa-bars');
        $('.menu').fadeOut();
        showMenu = false;
        } else {
            $('.fas').removeClass('fa-bars').addClass('fa-times');
            $('.menu').fadeIn();
            showMenu = true;    
        }
    }
);
$('.menu__link').on('click', () => {
    $('.fas').addClass('fa-bars').removeClass('fa-times');
    $('.menu').fadeOut();
    active = false;
})

