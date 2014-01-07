(function ($) {

    $(document).ready(function () {
      //open window detail image instagram
      $('.drupagram-detail').click(function() {
        var href = $(this).attr('href');
        var n = href.split("=");
        var id = n[1];
        window.open("/drupagram/detail/" + id, null, "width=400,height=450,status=yes,toolbar=no,menubar=no,location=no");
      });
      //fix click to slider category
			$('.link-category a').click(function() {
				window.location.href = $(this).attr('href');
			});
			
      var url = String(window.location);
      
      if(url.indexOf('/recycle') > 0) {
        $('.logo-shop a').addClass('not-active');
        $('.logo-consign a').addClass('not-active');
      }
      
      if(url.indexOf('/consign') > 0) {
        $('.logo-shop a').addClass('not-active');
        $('.logo-recycle a').addClass('not-active');
      }
      
        //Mobile Navigation
      $('#zone-menu .menu').mobileMenu({
        defaultText: 'Navigate to...',
        className: 'mnav',
        subMenuDash: '&emsp;'
      });
			
			$('.page-shop-stores .overlay-stores').hover(function() {
				$(this).parent().find('.flexslider .flex-direction-nav a').css('display', 'block');
				$(this).parent().find('.flexslider .flex-direction-nav a').css('opacity', 1);
				$(this).parent().find('.flexslider .flex-direction-nav a.flex-prev').css('left', '5px');
				$(this).parent().find('.flexslider .flex-direction-nav a.flex-next').css('right', '5px');
			}, function() {
				$(this).parent().find('.flexslider .flex-direction-nav a').css('display', '');
			});
  
    });

})(jQuery);
