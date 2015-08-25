$(document).ready(function(){
  initialize();

  // Function for adding a marker to the page.
  function addMarker(location, map) {
    marker = new google.maps.Marker({
        position: location,
        animation:google.maps.Animation.BOUNCE,
        map: map
    });      
  }

  function successFunction(position)
  {
      var lati = position.coords.latitude;
      var longi = position.coords.longitude;

      var myLatlng = new google.maps.LatLng(lati, longi);

      var mapProp = {
        center: myLatlng,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map($("#planGoogleMap")[0], mapProp);
      addMarker(myLatlng, map);
  }


  function errorFunction(position) 
  {
    
  }

  function initialize() {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
    else 
    {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    }
  }
});