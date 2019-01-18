{
  $('#nav-icon').click(function() {
    $('#nav-icon, #menu').toggleClass('open');
  });

  $('#menu a').click(function() {
    $('#nav-icon, #menu').toggleClass('open');
  });
}
