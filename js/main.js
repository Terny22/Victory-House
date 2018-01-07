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

$('.at-gallery-button').on("click", openPhotoSwipe);

  
function initMap() {

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
}

function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0],
      items = [
        { src: 'img/gal/photo-1.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-2.jpg', w: 1280, h: 960 },
        { src: 'img/gal/photo-3.jpg', w: 1280, h: 960 },
        { src: 'img/gal/photo-4.jpg', w: 1280, h: 960 },
        { src: 'img/gal/photo-5.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-6.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-7.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-8.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-9.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-10.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-11.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-12.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-13.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-14.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-15.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-16.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-17.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-18.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-19.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-20.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-21.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-22.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-23.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-24.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-25.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-26.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-27.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-28.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-29.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-30.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-31.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-32.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-33.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-34.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-35.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-36.jpg', w: 720, h: 1280 },
        { src: 'img/gal/photo-37.jpg', w: 1280, h: 720 },
        { src: 'img/gal/photo-38.jpg', w: 1280, h: 720 }
      ],
      options = {
        closeOnScroll: false
      };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}