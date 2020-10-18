/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running.");

    // ... din kode herfra ...
    
    //For "placeholder" teksten til at forsvinde når input feltet er i focus
    $('input').focus(function(){
        $(this).attr('placeholder', '')
    });
    
    //Drop down function
    function dropDownFunction(n) {
        n.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
    }
    
    $('.dropbtn').click(function(){dropDownFunction(this)});
    

    //Her gør vi det muligt at gå til næste skridt i formularen, ved hjælp af frem og tilbage pile, samt interaktive prikker
    
    var slides = document.getElementsByClassName("section");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
        //console.log("clicked dot");
    }

    function showSlides(n) {
        var i;
        if (n > slides.length) {
            slideIndex = slides.length;
        }
        if (n < 1) {
            slideIndex = 1;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    $('.dot1').click(function(){currentSlide(1)});
    $('.dot2').click(function(){currentSlide(2)});
    $('.dot3').click(function(){currentSlide(3)});
    $('.dot4').click(function(){currentSlide(4)});
    $('.dot5').click(function(){currentSlide(5)});
    $('.dot6').click(function(){currentSlide(6)});
    $('.dot7').click(function(){currentSlide(7)});
    
    $('.prev').click(function() {plusSlides(-1)});
    $('.next').click(function() {plusSlides(1)});

    // ... din kode slut ...

}); // denne line må ikke slettes
