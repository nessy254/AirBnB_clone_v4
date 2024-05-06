$(document).ready(function() {
    var selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        updateSelectedAmenities();
    });

    function updateSelectedAmenities() {
        var selectedAmenitiesList = $('#selected-amenities-list');
        selectedAmenitiesList.empty();

        $.each(selectedAmenities, function(amenityId, amenityName) {
            selectedAmenitiesList.append('<li>' + amenityName + '</li>');
        });
    }
});
