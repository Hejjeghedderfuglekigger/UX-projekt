/*
 * fil: form.js
 * purpose: jquery til form.html
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running.");

    // ... din kode herfra ...

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

    $('.dot1').click(function () {
        currentSlide(1)
    });
    $('.dot2').click(function () {
        currentSlide(2)
    });
    $('.dot3').click(function () {
        currentSlide(3)
    });
    $('.dot4').click(function () {
        currentSlide(4)
    });
    $('.dot5').click(function () {
        currentSlide(5)
    });
    $('.dot6').click(function () {
        currentSlide(6)
    });
    $('.dot7').click(function () {
        currentSlide(7)
    });
    

    //Her tilføjes vores kort på kampagne siden, men den styling vi har lavet 
    mapboxgl.accessToken = 'pk.eyJ1IjoicGV3cGV3YmlyZCIsImEiOiJja2dhdGJ5NXEwYThyMnhvNGthYWYwc3l3In0.5drls2ZBSctCfaWg7Odv2g';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/pewpewbird/ckgaqkssb1hep19quqsxcot48/draft', // style URL
        center: [10.789, 56.189], // starting position [lng, lat]
        zoom: 6, // starting zoom
        pitch: 50,
    });





    // ... din kode slut ...

}); // denne line må ikke slettes
