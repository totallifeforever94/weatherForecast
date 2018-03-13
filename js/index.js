$(document).ready( function() {
    $('#getWeather').click( function() {
       let city = $('#city').val();
       let key = '0520485efb9e035d7d5f37715a9db23d';
       
       $.ajax({
           url: 'https://api.openweathermap.org/data/2.5/weather',
           dataType: 'json',
           metho: 'GET',
           data: {q: city, appid: key},
           
           success: function(data) {
               let wf = "";
               $.each(data.weather, function(index, val) {
                    wf += '<p><b>' + data.name + '</b><img src=' + val.icon + '.png></p>'+
                    '<p><b>' + Math.ceil(data.main.temp - 273.15) + ' °C' + '</b></p>' + val.main + ', ' + val.description;
               });
               $('#showWeather').html(wf);
           }
           
        });
    });
});
