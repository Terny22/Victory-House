var $secondHeader = $('.at_second-header'),
    $scrollToTop = $('.site-scroll-top');

$(window).scroll(function(){
  if ($(window).scrollTop() >= 450) {
      $secondHeader.addClass('show-header');
  }
  else {
      $secondHeader.removeClass('show-header');
  }
  if ($(window).scrollTop() >= 600) {
      $scrollToTop.addClass('show-scroll-top');
  }
  else {
      $scrollToTop.removeClass('show-scroll-top');
  }

});

$('.at-main-second_logo').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 1000, 'swing');
});

$scrollToTop.click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 1000, 'swing');
});

$('.move-to_abus').click(function() {
  $('body,html').animate({
    scrollTop: $('.at-abus').offset().top - 80
  }, 1000, 'swing');
});

$('.move-to_bnf').click(function() {
  $('body,html').animate({
    scrollTop: $('.at-bnf').offset().top - 80
  }, 1000, 'swing');
});

$('.move-to_services').click(function() {
  $('body,html').animate({
    scrollTop: $('.at-services').offset().top - 80
  }, 1000, 'swing');
});

$('.move-to_gallery').click(function() {
  $('body,html').animate({
    scrollTop: $('.at-gallery').offset().top - 80
  }, 1000, 'swing');
});

$('.move-to_contacts').click(function() {
  $('body,html').animate({
    scrollTop: $('.at-footer').offset().top - 80
  }, 1000, 'swing');
});

$('.at-gallery-button').on("click", openPhotoSwipe);

  
/*function initMap() {

  var styledMapType = new google.maps.StyledMapType(
    [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
  );

  var uluru = {lat: 52.532057, lng: 17.607752},
      imageMarker = {
        url: "https://user-images.githubusercontent.com/7759426/34457211-bd5ad998-edb2-11e7-963b-af1136ce3f11.png"
      };
  var data = "Gniezno, ul. Pocztowa 9</br> tel. (+48 79) 320 49 60";
  var infowindow = new google.maps.InfoWindow({
    content: data
  });
  var map = new google.maps.Map(document.getElementById('footer-map'), {
    zoom: 16,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: imageMarker
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}*/

function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0],
      items = [
        { src: 'img/gal/photo-1.jpg', w: 739, h: 1064 },
        { src: 'img/gal/photo-2.jpg', w: 788, h: 1058 },
        { src: 'img/gal/photo-3.jpg', w: 1280, h: 960 }
      ],
      options = {
        closeOnScroll: false
      };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}