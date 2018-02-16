// INTENTAR REALIZAR LLAMADOS DE AJAX CON JQUERY
$(document).ready(() => { // Llamará a la API solo una vez que el documento esté listo
  /* let lat; // Determiná coordenadas (latitud y longitud) creando las variables
  let long;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      $('#data-coords').html("Latitud: " + lat + "<br>Longitud: " + long);
    }) */

  $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=-33.419047,-70.641713&key=AIzaSyBaKN_Q4y8ZzGwcSv5puvxBDM1C34lQt4M`,
      type: 'GET',
      datatype: 'json'
    })
    .done(function(response) {
      console.log(response);
      showLocation(response);
    })
    .fail(function(error) {
      console.log('Hay un error en la conexión a la API de Geolocalización :/');
    })
})

function showLocation(position) {
  let searchLocal = position.Search;
  if (position.Search === 'false') {
    console.log('No se encontró información');
  } else {
    $('#data-coords');
    search.forEach(element => {
      $('#data-coords').append(`<div class="ubicacion"><p>${element.position}</p></div>`);
      $(document).getElementById('#data-coords').innerHTML = searchLocal;
    })
  }
}

$.ajax({
    url: `https://api.darksky.net/forecast/fc45c54e62d6da6ef27c92026e99d2b5/-33.419047,-70.641713?units=si&lang=es`, // LINK API CLIMA
    type: 'GET',
    datatype: 'json'
  })
  .done(function(response) {
    console.log(response); // En este punto, la info obtenida de la API (Clima) se muestra en la consola
    showWeather(response);
  })
  .fail(function(error) {
    console.log('Hay un error en la conexión a la API del Clima :/');
  })

function showWeather(info) {
  let search = info.Search;
  if (info.Response === 'false') {
    console.log('No se encontró información');
  } else {
    $('#weather, #temperature');
    search.forEach(element => {
      $('#weather').append(`<div class="local_weather"<p>${element.currently}</p></div>`);
    })
  }
};
/* console.log(position, info); */