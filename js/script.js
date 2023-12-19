$(".page-scroll").on("click", function(e) {
    var link = $(this).attr("href");
    var elemenLink = $(link);
    $("html").animate({
        scrollTop: elemenLink.offset().top - 50
    }, 750, 'swing');

    e.preventDefault();

});

// parallax

//jumbotron
$(window).on('load', function() {
    $('.jumbotron img').addClass('header-show');
    $('.jumbotron h1').addClass('header-show');
    $('.jumbotron p').addClass('header-show');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // about
    if(wScroll > $('.about').offset().top - 500) {
        $('.about p').each(function() {
            setTimeout(function() {
                $('.about p').addClass('p-show');
            });
        });
    }

    // portfolio
    if(wScroll > $('.portfolio').offset().top - 500) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('show');
            }, 300 * (i+1));
        });
    }
});