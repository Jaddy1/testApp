var caracas = {lat: 10.4806, lng: -66.9036};
var newYork = {lat: 40.7128, lng: -74.0059};
var paris = {lat: 48.856, lng: 2.352};
var losAngeles ={lat: 34.05, lng: -118.2437};
var locations = [caracas, newYork, paris, losAngeles]
var marker;

// Initialize and add the map
function initMap() {
// The location of Uluru
    var uluru = {lat: 40.7128, lng: -74.0060};
// The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
    
    // for(var i =0; i < locations.length; i++){
    //     var place = locations[i];
    //     console.log(place)
    //     var infowindow = new google.maps.InfoWindow({
    //         content: contentString
    //     });
    //     var marker = new google.maps.Marker({position: place, map: map});
    // }
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">New York City</h1>'+
      '<div id="bodyContent">'+
      '<p><b>New York City</b>, also referred to as <b>The Big Apple</b>, is a large ' +
      'city located in the southern part of New York State '+
      'and is home to over 8 million people. '+
      '</p>'+
      '<p>Attribution: New York City, <a href="https://en.wikipedia.org/wiki/New_York_City">'+
      ' https://en.wikipedia.org/wiki/New_York_City</a> '+
      '(last visited June 22, 2009).</p>'+
      '<img src = "https://shungphotography.files.wordpress.com/2017/06/dsc_3757s.jpg?w=800" style="height:35%; width:35%;*/"'+
      '</div>'+
      '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'New York City'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    marker.addListener('click', toggleBounce);
// The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: uluru, map: map});
}
function toggleBounce(){
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}