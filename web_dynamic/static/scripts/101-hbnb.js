$(document).ready(function() {
    $('#toggle-reviews').click(function() {
        var buttonText = $(this).text();
        if (buttonText === 'show') {
            fetchReviews();
            $(this).text('hide');
        } else {
            $('.reviews').empty();
            $(this).text('show');
        }
    });

    function fetchReviews() {
        $.get("http://0.0.0.0:5001/api/v1/reviews", function(data) {
            displayReviews(data);
        });
    }

    function displayReviews(reviews) {
        var reviewsSection = $('.reviews');
        reviewsSection.empty();

        reviews.forEach(function(review) {
            var reviewItem = $('<div>').text(review.text);
            reviewsSection.append(reviewItem);
        });
    }
});
