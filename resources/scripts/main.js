// JavaScript for index.html
// Edited by Nendar Wibarasta - January 2018

// Add Google Maps
function myMap()
{
  myCenter=new google.maps.LatLng(-7.801378, 110.364765);
  var mapOptions= {
    center:myCenter,
    zoom:6, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}


// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "nw-bar" + " nw-card" + " nw-animate-top" + " nw-white";
    } else {
        navbar.className = navbar.className.replace(" nw-card nw-animate-top nw-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("nw-show") == -1) {
        x.className += " nw-show";
    } else {
        x.className = x.className.replace(" nw-show", "");
    }
}
