(function($){

    jQuery(document).ready(function () {

        $("#cal-day").on("click", function () {
            $('#main-calendar').fullCalendar('changeView', 'agendaDay');
        });

        $("#cal-month").on("click", function () {
            $('#main-calendar').fullCalendar('changeView', 'month');
        });

        $("#cal-year").on("click", function () {
            $('#main-calendar').fullCalendar('changeView', 'listYear');
        });

        $("#cal-prev").on("click", function () {
            $('#main-calendar').fullCalendar('prev');
        });

        $("#cal-next").on("click", function () {
            $('#main-calendar').fullCalendar('next');
        });

        $("#cal-today").on("click", function () {
            $('#main-calendar').fullCalendar('today');
        });

        $("#cal-month").focus();

        var mmt = new moment();

        setTimeout(function () {
            $("#main-content").height($("#secondary-content").height());
        }, 500);


        $(".checklist-intro p").text(mmt.format("dddd"));
        $(".checklist-intro span").text(mmt.format("D MMMM"));

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $("#calendar-output").text(new moment().format("MMMM YYYY"))

        $('.weather-temperature').openWeather({
            key: '307801f3850dbe53291b86eea70f2031',
            city: 'Garden Grove, CA',
            descriptionTarget: '.weather-description',
            windSpeedTarget: '.weather-wind-speed',
            minTemperatureTarget: '.weather-min-temperature',
            maxTemperatureTarget: '.weather-max-temperature',
            humidityTarget: '.weather-humidity',
            sunriseTarget: '.weather-sunrise',
            sunsetTarget: '.weather-sunset',
            placeTarget: '.weather-place',
            iconTarget: '.weather-icon',
            // customIcons: 'img/icons/weather/',
            success: function() {

                $("#main-content").height($("#secondary-content").height());
            },
            error: function() {
                console.error("There was a problem getting the weather report.");
            }
        });



        $('#main-calendar').fullCalendar({
            header: false,
            defaultDate: new Date(),
            navLinks: false, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            dayClick: function(date, jsEvent, view) {

                console.log("elt", $(this).attr("class"));

                console.log('Clicked on: ' + date.format());

                console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                console.log('Current view: ' + view.name);

                $("#calendar-output").text(date.format("MMMM YYYY"))

                $(".checklist-intro p").text(date.format("dddd"));
                $(".checklist-intro span").text(date.format("D MMMM"));

                // $('#main-calendar').fullCalendar( 'gotoDate', date );

                $(".fc-day").css('background-color', 'white');
                // change the day's background color just for fun
                $(this).css('background-color', '#fffde7');

            },
            events: [

            ]
        });
    });

})(jQuery); // end of jQuery name space
