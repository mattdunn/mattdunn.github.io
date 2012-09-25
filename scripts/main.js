(function($) {
  $(function() {
    $(".spiffy-text").lettering(); 
    $(".spiffy-text").fadeIn(1000, function(){
      $("#where-to-find-me a").fadeIn(1000);
    });
  });
})(jQuery);
