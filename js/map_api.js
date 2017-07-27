function initMap(){
  var chicago = {lat: 41.879178, lng: -87.625893}
  var map = new google.maps.Map(document.getElementById('google_api'), {zoom: 10, center: chicago});
   
  var restaurants = [
        ['Tahoora Sweet', 41.997477, -87.689227,'<h1 style="font-size: 22px; margin-top:0px">Tahoora Sweets</h1><p style="font-size: 15px">The best bakery for Indian sweets.</p><p style="font-size: 13px; font-weight: 700">Recommendation: Gullab Gam from this place</p>'],
        ['Serena Restaurant', 41.997497,-87.687946,'<h1 style="font-size: 22px; margin-top:0px">Serena Restaurant</h1><p style="font-size: 15px">One of my favorite Indian/Paki restaurant.</p><p style="font-size: 13px; font-weight: 700">Recommendation: Haleem (a dish of lentils and beef)</p>'],
        ['Taqueria San Jose', 41.834915, -87.645925,'<h1 style="font-size: 22px; margin-top:0px">Taqueria San Jose</h1><p style="font-size: 15px">A Taqueria in Bridge Port. I am in love with their tacos.</p><p style="font-size: 13px; font-weight: 700">Recommendation: Steak Taco with cilantro and onions.</p>'],
        ['Damascus Falafel', 41.722937, -87.944835,'<h1 style="font-size: 22px; margin-top:0px">Damascus Falafel</h1><p style="font-size: 15px">The best Mediterranean food around the Chicago area "Mediterranean Chipotle"</p><p style="font-size: 13px; font-weight: 700">Recommendation: Damascus way shawarma roll</p>'],
        ['Lahore Food & Grill', 41.998018, -87.683277,'<h1 style="font-size: 22px; margin-top:0px">Lahore Food & Grill</h1><p style="font-size: 15px">An restaurant that serves Paki food</p><p style="font-size: 13px; font-weight: 700">Recommendation: Chicken Chargha (Might Be Too Spicy)</p>'],
        ['Oberoi\'s Indian Food', 41.838076, -87.633827,'<h1 style="font-size: 22px; margin-top:0px">Oberoi\'s Indian Food</h1><p style="font-size: 15px">A very conveniently located Indian restaurant around the IIT campus</p><p style="font-size: 13px; font-weight: 700">Recommendation: Mango Lassi</p>'],
        ['Vivere',41.880585, -87.630197,'<h1 style="font-size: 22px; margin-top:0px">Vivere</h1><p style="font-size: 15px">A very fancy Italian restaurant downtown.</p><p style="font-size: 13px; font-weight: 700">Recommendation: Ravioli di Formaggi con Pomodoro</p>'],
        ['Magnolia Cafe', 41.883962, -87.628129,'<h1 style="font-size: 22px; margin-top:0px">Magnolia Cafe</h1><p style="font-size: 15px">A popular coffee shop and bakery. Located on heart of Downtown</p><p style="font-size: 13px; font-weight: 700">Recommendation: Caramel Latte</p>']
        ['Glazed and Infused', 41.917955, -87.652399, '<h1 style="font-size: 22px; margin-top:0px">Glazed and Infused</h1><p style="font-size: 15px">On my list of restaurants I want to visit. </p>']]; 
  
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
    content: string
  });     
  
  mark.addListener('click', function(){
    info.open(object, mark);
  });
}
 
