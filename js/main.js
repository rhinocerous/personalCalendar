(function($){

    jQuery(document).ready(function () {

        var mmt = new moment();
        $("#main-content").height($("#secondary-content").height());

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

                console.log("here in success");

                $("#main-content").height($("#secondary-content").height());

                // $('.weather-wrapper').removeClass("hide");
            },
            error: function() {
                console.log("These aren't the droids you're looking for.");
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

                // $(".fc-day").css('background-color', 'white');
                //
                // // change the day's background color just for fun
                // $(this).css('background-color', 'red');

            },
            events: [
                // {
                //     title: 'All Day Event',
                //     start: '2017-05-01'
                // },
                // {
                //     title: 'Long Event',
                //     start: '2017-05-07',
                //     end: '2017-05-10'
                // },
                // {
                //     id: 999,
                //     title: 'Repeating Event',
                //     start: '2017-05-09T16:00:00'
                // },
                // {
                //     id: 999,
                //     title: 'Repeating Event',
                //     start: '2017-05-16T16:00:00'
                // },
                // {
                //     title: 'Conference',
                //     start: '2017-05-11',
                //     end: '2017-05-13'
                // },
                // {
                //     title: 'Meeting',
                //     start: '2017-05-12T10:30:00',
                //     end: '2017-05-12T12:30:00'
                // },
                // {
                //     title: 'Lunch',
                //     start: '2017-05-12T12:00:00'
                // },
                // {
                //     title: 'Meeting',
                //     start: '2017-05-12T14:30:00'
                // },
                // {
                //     title: 'Happy Hour',
                //     start: '2017-05-12T17:30:00'
                // },
                // {
                //     title: 'Dinner',
                //     start: '2017-05-12T20:00:00'
                // },
                // {
                //     title: 'Birthday Party',
                //     start: '2017-05-13T07:00:00'
                // },
                // {
                //     title: 'Click for Google',
                //     url: 'http://google.com/',
                //     start: '2017-05-28'
                // }
            ]
        });
    });

})(jQuery); // end of jQuery name space
