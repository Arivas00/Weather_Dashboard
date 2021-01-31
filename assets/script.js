$(document).ready(function () {

    var DateTime = luxon.DateTime;
    var now = DateTime.local();

    $("#search").on('click', function () {

        var city = $("#citysearch").val();
        var APIkey = "&appid=ec15295cc65f712aedab78c75dd81b07"
        var imperial = "&units=imperial"
        var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city
        // var oneAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + APIkey;

        $("#day1").text(now.toLocaleString());
        $("#day2").text(now.plus({days: 1}).toLocaleString());
        $("#day3").text(now.plus({days: 2}).toLocaleString());
        $("#day4").text(now.plus({days: 3}).toLocaleString());
        $("#day5").text(now.plus({days: 4}).toLocaleString());
        $("#day6").text(now.plus({days: 5}).toLocaleString());

        fetch(currentWeather + imperial + APIkey)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })



    })

})