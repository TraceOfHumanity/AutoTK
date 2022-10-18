function toggleColspan () {
    $('.two__colonTable').prop('colSpan', (window.matchMedia('(max-width: 659px)').matches ? 2 : 4));
}

$(window).on('resize', function () {
    toggleColspan();
});
$(document).ready(function () {
    toggleColspan();
});