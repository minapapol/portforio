function initMap() {
  var uluru = {lat: 13.709608, lng: 100.66065};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: uluru
  });
  var marker = new google.maps.Marker({
  position: uluru,
  map: map
  });
}
