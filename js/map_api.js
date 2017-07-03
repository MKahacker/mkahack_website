function initMap(){
  var chicago = {lat: 41.879178, lng: -87.625893}
  var map = new google.maps.Map(document.getElementById('google_api'), {zoom: 10, center: chicago});
  
  var restaurants = [
        ['Tahoora Sweet', 41.997477, -87.689227],
        ['Serena Restaurant', 41.997497,-87.687946],
        ['Taqueria San Jose', 41.834915, -87.645925],
        ['Damascus Falafel', 41.722937, -87.944835],
        ['Lahore Food & Grill', 41.998018, -87.683277],
        ['Oberoi\'s Indian Food', 41.838076, -87.633827],
        ['Vivere',41.880585, -87.630197],
        ['Magnolia Cafe', 41.883962, -87.628129]]; 
  
  var fork ={ url:'images/fork2.png'};
  
  for (var i =0; i < restaurants.length; i++){
    var restaurant = restaurants[i];
    var marker = new google.maps.Marker({
      position: {lat: restaurant[1], lng: restaurant[2]},
      map: map,
      icon: fork,
      title: restaurant[0]
    });
  }
}