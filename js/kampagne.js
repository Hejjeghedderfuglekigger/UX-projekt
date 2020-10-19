/*
 * fil: form.js
 * purpose: jquery til form.html
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running.");

    // ... din kode herfra ...

    //Til at fjerne betalings blockeringen
    $('#payButton').click(function(){
        $('#blackbox').css('display', 'none');
    })
    
    //Skift billeder til demonstration
    $('#picChange').click(function(){
        $('#graphChange').html('<img src="img/Skridt-graf-p2.svg" id="graf" alt="graf" />');
        $('#gamifyChange').html('<img src="img/game10.png" alt="game9" />'); 
    })
    
    //Her tilføjes vores kort på kampagne siden, men den styling vi har lavet 
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZXJpeWFjaGlya292YSIsImEiOiJja2Zxa2gxNXgwc2NuMnhwZnN6d2Q4dW8yIn0.A4_GITwBPZSTG9f9NOCrvQ';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/valeriyachirkova/ckggmppog07ha19p31y142kdq', // style URL
        center: [10.789, 56.189], // starting position [lng, lat]
        zoom: 6, // starting zoom
    });

    // ... din kode slut ...

}); // denne line må ikke slettes
