
$('.tab').on('click', function() {
    $('.tab').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.tab span').text('+');
    $(this).find('span').text('-');
    $('.card').removeClass('active-card');
    let activeCard = `#card-${$(this).attr('id')}`;
    $(activeCard).addClass('active-card');
});

$('.menu-link').on('click', function() {
  $('.header-container').toggleClass('drop-down');
  $('.navlink').toggleClass('hide-p')
  $('.search').toggleClass('hide-search')
})
