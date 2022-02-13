// Initialize and add the map
function initMap() {
  // The location of Uluru
  const india = { lat: 20.5937, lng: 78.9629 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: india,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}