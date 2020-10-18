/*
 * fil: form.js
 * purpose: jquery til form.html
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running.");

    // ... din kode herfra ...

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
