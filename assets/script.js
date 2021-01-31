$(document).ready(function () {

    var DateTime = luxon.DateTime;
    var date = DateTime.local().setLocale('en').toLocaleString();

    $("#search").on('click', function() {

    var city = $("#citysearch").val();
    var currentWeather = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    // var oneAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + APIkey;
        
        $("#day1").text(date)
        



    })

})