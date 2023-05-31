var width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() <= 775) {
    $("#pigentitle").html("Pigeon<br>holed");
  }else{
    $("#pigentitle").html("Pigeonholed");
  }
});