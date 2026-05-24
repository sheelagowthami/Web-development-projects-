function activateSOS(){

    alert(
        "🚨 SOS ACTIVATED!\n\nSelect emergency help below."
    );
}

/* Google Maps Hospital Search */

function openHospital(){

    window.open(
        "https://www.google.com/maps/search/hospitals+near+me",
        "_blank"
    );
}

/* Ambulance */

function callAmbulance(){

    window.location.href="tel:108";
}

/* Police */

function callPolice(){

    window.location.href="tel:100";
}

/* Guardian Contact */

function callGuardian(){

    window.location.href="tel:9876543210";
}
