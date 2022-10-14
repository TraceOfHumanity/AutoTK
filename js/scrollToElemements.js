$('a.navigation').on('click', function(event) {
    var $anchor = $(this)

    $("html, body")
    .stop()
    .animate({
        scrollTop: $($anchor.attr('href')).offset().top - 57,
    },
    {
        duration: 1000,
        specialEasing:{
            width:'linear',
            height: 'easeInOutCubic',
        },
    }
    )
    event.preventDefault()
})
