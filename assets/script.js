$(document).ready(function () {

    var DateTime = luxon.DateTime;
    var now = DateTime.local();

    var city = $("#citysearch").val();
    var APIkey = "&appid=ec15295cc65f712aedab78c75dd81b07"
    var imperial = "&units=imperial"
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city
    var oneAPI = "https://api.openweathermap.org/data/2.5/onecall?lat="


    $("#search").on('click', function () {
        var key = $("#citysearch")
        var searches = localStorage.getItem(key);
        var row = $("<div>").addClass("row")
        var card = $("<div>").addClass("card")
        var cardBody = $("<div>").addClass("card-body btn")
        localStorage.setItem(key, city);
        $("#aside").append(row.append(card.append(cardBody.append(searches))))

        $("h2").removeClass("visually-hidden")
        $("div").removeClass("visually-hidden")
        $("p").removeClass("visually-hidden")

        $("#day1").text(city + " " + now.toLocaleString());
        $("#day2").text(now.plus({ days: 1 }).toLocaleString());
        $("#day3").text(now.plus({ days: 2 }).toLocaleString());
        $("#day4").text(now.plus({ days: 3 }).toLocaleString());
        $("#day5").text(now.plus({ days: 4 }).toLocaleString());
        $("#day6").text(now.plus({ days: 5 }).toLocaleString());

        fetch(currentWeather + imperial + APIkey)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var lat = data.coord.lat;
                var lon = data.coord.lon;

                fetch(oneAPI + lat + "&lon=" + lon + imperial + APIkey)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);

                        if (data.current.uvi < 2) {
                            $("#uvNum").addClass("bg-success")
                            $("#uvNum").text(data.current.uvi)
                        } else if (data.current.uvi < 7 && data.current.uvi > 2) {
                            $("#uvNum").addClass("bg-warning")
                            $("#uvNum").text(data.current.uvi)
                        } else {
                            $("#uvNum").addClass("bg-danger")
                            $("#uvNum").text(data.current.uvi)
                        }

                        $("#temp2").text("Temp: " + data.daily[1].temp.day + " °F");
                        $("#temp3").text("Temp: " + data.daily[2].temp.day + " °F");
                        $("#temp4").text("Temp: " + data.daily[3].temp.day + " °F");
                        $("#temp5").text("Temp: " + data.daily[4].temp.day + " °F");
                        $("#temp6").text("Temp: " + data.daily[5].temp.day + " °F");

                        $("#humid1").text("Humidity: " + data.daily[0].humidity + "%");
                        $("#humid2").text("Humidity: " + data.daily[1].humidity + "%");
                        $("#humid3").text("Humidity: " + data.daily[2].humidity + "%");
                        $("#humid4").text("Humidity: " + data.daily[3].humidity + "%");
                        $("#humid5").text("Humidity: " + data.daily[4].humidity + "%");
                        $("#humid6").text("Humidity: " + data.daily[5].humidity + "%");

                        $("#emoji1").attr("src", "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + ".png")
                        $("#emoji2").attr("src", "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png");
                        $("#emoji3").attr("src", "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png");
                        $("#emoji4").attr("src", "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png");
                        $("#emoji5").attr("src", "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png");
                        $("#emoji6").attr("src", "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png");

                    })

                $("#temp1").text("Temperature: " + data.main.temp + " °F");
                $("#wind").text("Wind Speed: " + data.wind.speed + " MPH")



            })
        // Set Local storage


    })


})