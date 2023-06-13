$(document).ready(function () {
    $('#mobile-menu-button').click(function () {
        $('#mobile-menu').slideToggle();
    });

    $('.img-click').click(function () {
        $('.detail').hide();
        $(this).each(() => {
            const detail = $(this).attr('data-detail');
            const el = $(`#${detail}`)

            el.slideToggle();
        });
    });
});