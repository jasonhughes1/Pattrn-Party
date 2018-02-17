
$('.tab').on('click', function() {
    $('.tab').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.tab span').text('+');
    $(this).find('span').text('-');
    $('.card').removeClass('active-card');
    let activeCard = `#card-${$(this).attr('id')}`;
    $(activeCard).addClass('active-card');
});
