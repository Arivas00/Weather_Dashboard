$(document).ready(function () {

    var DateTime = luxon.DateTime;
    var date = DateTime.local().setLocale('en').toLocaleString();

    $("#day1").text(date)

})