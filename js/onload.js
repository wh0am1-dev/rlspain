/*
  page setup
*/

new WOW().init();

$(() => {
  $('.list-group-item').first().addClass('active');
  $('.tab-pane').first().addClass('active');

  $('.list-group-item').click(function () {
    $(this).trigger('blur');
  });

  $('.rl-item-list').slimScroll({
    height: '100%',
    distance: '-5px',
  });
});
