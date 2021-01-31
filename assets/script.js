$(document).ready(function () {

    var DateTime = luxon.DateTime;
    var date = DateTime.local().setLocale('en').toLocaleString();

    $("#search").on('click', function () {

        var city = $("#citysearch").val();
        var APIkey = "ec15295cc65f712aedab78c75dd81b07"
        var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
        // var oneAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + APIkey;

        $("#day1").text(date)

        fetch(currentWeather)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })



    })

})