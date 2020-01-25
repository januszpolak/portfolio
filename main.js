$('#me').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.me').offset().top
    }, 1000)
})
$('#projects').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.projects').offset().top
    }, 1000)
})
$('#contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 1000)
})