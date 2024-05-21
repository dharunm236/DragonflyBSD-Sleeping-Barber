$(document).ready(function() {
  // Switches code shown in panels
  $('#pill-c').click(function() {
    $('#pill-c').attr('class', 'active');

    $('#code-1').show();
    $('#code-2').show();
  });
});