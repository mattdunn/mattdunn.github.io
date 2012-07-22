(function($) {
  $(document).ready(function() {
    $(".spiffy-text").lettering();
    $('#container').isotope({
      itemSelector : '.item'
    });
  });
})(jQuery);
