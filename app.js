// All ends must have beginnings...
$(document).ready(function(){
// $('#aboutmepage').hide();
$('#portfoliopage').hide();
// Buttons hiding and showing pages.
$("#aboutClick").on("click", function(event) {
    $('#aboutmepage').slideDown();
    $('#portfoliopage').slideUp();
    $(".card").attr('class', 'card animated rollOut');
    $('#aboutImage').attr('class', 'responsive-img animated bounceInLeft');
    let delay = setTimeout(function() {
        $(".card").attr('class', 'card animated rollIn');                
    }, 400);  
});
// fun with animate.css
$("#portfolioClick").on("click", function(event) {
    $('#aboutmepage').slideUp();
    $('#portfoliopage').slideDown();
});
$(".card").on("click", function(event) {
        $(".card").removeClass('animated rollIn');  
        $(this).addClass('animated pulse');
        let delay = setTimeout(function() {
            $(".card").removeClass('animated pulse');                  
        }, 1500);        
    });
$("#aboutImage").on("click", function(event) {
    let state = $(this).attr('src');
    if (state == 'images/guitar.jpg'){
        $('#aboutImage').addClass('animated lightSpeedOut');
        let delay = setTimeout(function() {
            $('#aboutImage').attr('src', 'images/guitar2.jpeg')
            $('#aboutImage').removeClass('animated lightSpeedOut');
            $('#aboutImage').addClass('animated bounceInLeft');
        }, 1000);        
    } else {
        $('#aboutImage').addClass('animated lightSpeedOut');
        let delay = setTimeout(function() {
            $('#aboutImage').attr('src', 'images/guitar.jpg')
            $('#aboutImage').removeClass('animated lightSpeedOut');
            $('#aboutImage').addClass('animated bounceInLeft');
        }, 1000);
    }
});
// TypeIt
var instance = new TypeIt('.taglineHead', {
    strings: ['Freelance Web Dev...', 'Living in Node.js...'],
    nextStringDelay: 3000,
    cursor: false,
    breakLines: false,
    loop: true
});
}); // The End...