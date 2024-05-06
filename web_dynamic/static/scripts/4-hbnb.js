$(document).ready(function() {
    checkAPIStatus();

    $('#filter-btn').click(function() {
        fetchPlaces();
    });

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
        var amenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            amenities.push($(this).data('id'));
        });

        var data = JSON.stringify({"amenities": amenities});

        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search",
            contentType: "application/json",
            data: data,
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
