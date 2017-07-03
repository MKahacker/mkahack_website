function initMap(){
  var chicago = {lat: 41.879178, lng: -87.625893}
  var map = new google.maps.Map(document.getElementById('google_api'), {zoom: 10, center: chicago});
   
  var restaurants = [
        ['Tahoora Sweet', 41.997477, -87.689227,'<h1 style="font-size: 22px">Tahoora Sweets</h1><p style="font-size: 15px">The best bakery for Indian sweets.<span style="display: block font-size: 13px">Recommendation: Gullab Gam from this place</span></p>'],
        ['Serena Restaurant', 41.997497,-87.687946,'<h1 style="font-size: 22px">Serena Restaurant</h1><p style="font-size: 15px">One of my favorite Indian/Paki restaurant.<br>Recommendation: Haleem (a dish of lentils and beef)</p>'],
        ['Taqueria San Jose', 41.834915, -87.645925,'<h1>Tahoora Sweets</h1><p>The best bakery for Indian sweets. I would recommend: Gullab Gam from this place</p>'],
        ['Damascus Falafel', 41.722937, -87.944835,'<h1>Tahoora Sweets</h1><p>The best bakery for Indian sweets. I would recommend: Gullab Gam from this place</p>'],
        ['Lahore Food & Grill', 41.998018, -87.683277,'<h1>Tahoora Sweets</h1><p>The best bakery for Indian sweets. I would recommend: Gullab Gam from this place</p>'],
        ['Oberoi\'s Indian Food', 41.838076, -87.633827,'<h1>Tahoora Sweets</h1><p>The best bakery for Indian sweets. I would recommend: Gullab Gam from this place</p>'],
        ['Vivere',41.880585, -87.630197,'<h1>Tahoora Sweets</h1><p>The best bakery for Indian sweets. I would recommend: Gullab Gam from this place</p>'],
        ['Magnolia Cafe', 41.883962, -87.628129,'<h1>Hi</h1><p>The best bakery for Indian sweets. I would recommend: Gullab Gam from this place</p>']]; 
  
  var fork ={ url:'images/fork2.png'};
  
  var MList = [];
  
  for (var i =0; i < restaurants.length; i++){
    var restaurant = restaurants[i];
    
    var marker = new google.maps.Marker({
      position: {lat: restaurant[1], lng: restaurant[2]},
      map: map,
      icon: fork,
      title: restaurant[0]
    });
    
    infoWindow(map, marker, restaurant[3]);
  }
} 

function infoWindow(object, mark, string){
  var info = new google.maps.InfoWindow({
    content: string,
    maxWidth: 300
  });     
  
  mark.addListener('click', function(){
    info.open(object, mark);
  });
}
 