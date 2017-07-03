function initMap(){
  var chicago = {lat: 41.879178, lng: -87.625893}
  var map = new google.maps.Map(document.getElementById('google_api'), {zoom: 10, center: chicago});
   
  var restaurants = [
        ['Tahoora Sweet', 41.997477, -87.689227,'<h1 style="font-size: 22px">Tahoora Sweets</h1><p style="font-size: 15px">The best bakery for Indian sweets. Recommendation: Gullab Gam from this place</p>'],
        ['Serena Restaurant', 41.997497,-87.687946,'<h1 style="font-size: 22px">Serena Restaurant</h1><p style="font-size: 15px">One of my favorite Indian/Paki restaurant.<br> Recommendation: Haleem (a dish of lentils and beef)</p>'],
        ['Taqueria San Jose', 41.834915, -87.645925,'<h1 style="font-size: 22px">Taqueria San Jose</h1><p style="font-size: 15px">A Taqueria in Bridge Port. I am in love with their tacos.<br> Recommendation: Steak Taco with cilantro and onions.</p>'],
        ['Damascus Falafel', 41.722937, -87.944835,'<h1 style="font-size: 22px">Damascus Falafel</h1><p style="font-size: 15px">The best Mediterranean food around the Chicago area "Mediterranean Chipotle"<br> Recommendation: Damascus way shawarma roll</p>'],
        ['Lahore Food & Grill', 41.998018, -87.683277,'<h1 style="font-size: 22px">Lahore Food & Grill</h1><p style="font-size: 15px">An restaurant that serves Paki food<br> Recommendation: Chicken Chargha (Might Be Too Spicy)</p>'],
        ['Oberoi\'s Indian Food', 41.838076, -87.633827,'<h1 style="font-size: 22px">Damascus Falafel</h1><p style="font-size: 15px">The best Mediterranean food around the Chicago area "Mediterranean Chipotle"<br>Recommendation: Damascus way shawarma roll</p>'],
        ['Vivere',41.880585, -87.630197,'<h1 style="font-size: 22px">Damascus Falafel</h1><p style="font-size: 15px">The best Mediterranean food around the Chicago area "Mediterranean Chipotle"<br>Recommendation: Damascus way shawarma roll</p>'],
        ['Magnolia Cafe', 41.883962, -87.628129,'<h1 style="font-size: 22px">Damascus Falafel</h1><p style="font-size: 15px">The best Mediterranean food around the Chicago area "Mediterranean Chipotle"<br>Recommendation: Damascus way shawarma roll</p>']]; 
  
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
 