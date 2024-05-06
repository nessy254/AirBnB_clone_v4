$(document).ready(function() {
    checkAPIStatus();
    fetchPlaces();

    function checkAPIStatus() {
        $.get("http://0.0.0.0:5001/api/v1/status", function(data) {
            if (data.status === "OK") {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        });
    }

    function fetchPlaces() {
        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search",
            contentType: "application/json",
            data: JSON.stringify({}),
            success: function(data) {
                displayPlaces(data);
            }
        });
    }

    function displayPlaces(places) {
        var placesSection = $('.places');
        placesSection.empty();

        places.forEach(function(place) {
            var placeItem = $('<article>').text(place.name);
            placesSection.append(placeItem);
        });
    }
});
