//Responsive menu
  (function($){
    $.fn.mobileMenu = function(options) {
	
      var defaults = {
        defaultText: 'Navigate to...',
        className: 'select-menu',
        subMenuClass: 'sub-menu',
        subMenuDash: '&ndash;'
      },
      settings = $.extend( defaults, options ),
      el = $(this);
	
      this.each(function(){
        
        //clone ul
        var ulmobile = el.clone();
        ulmobile.removeClass('menu');
        ulmobile.addClass(settings.className);
        // ad class to submenu list
        el.find('ul').addClass(settings.subMenuClass);
        
        $('<div />', {
          'class'   : 'wrap-mobile-menu'
        }).insertAfter( el );
        
        $('<div />', {
          'class'   : 'wrap-top-mobile-menu clearfix'
        }).appendTo( '.wrap-mobile-menu' );
        
        // Create default option
        $('<div />', {
          "text"		: settings.defaultText,
          'class'   : 'wrap-top-mobile-menu-left'
        }).appendTo( '.wrap-top-mobile-menu' );
        
        $('<div />', {
          'class'   : 'wrap-top-mobile-menu-arrow'
        }).appendTo( '.wrap-top-mobile-menu' );
        
        
        $('<div />', {
          'class'   : 'tr_wrapper'
        }).appendTo( '.wrap-top-mobile-menu-arrow' );
        // Create base menu
        console.log(ulmobile);
        ulmobile.appendTo( '.wrap-mobile-menu' );

        

        // Create select option from menu
        el.find('a').each(function(){
          var $this 	= $(this),
          optText	= '&nbsp;' + $this.text(),
          optSub	= $this.parents( '.' + settings.subMenuClass ),
          len			= optSub.length,
          dash;
			
          // if menu has sub menu
          if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
            dash = Array( len+1 ).join( settings.subMenuDash );
            optText = dash + optText;
          }

          // Now build menu and append it
          $('<li />', {
            "value"	: this.href,
            "html"	: optText,
            "selected" : (this.href == window.location.href)
          }).appendTo( '.' + settings.className );

        }); // End el.find('a').each

        // Change event on select element
        $('.' + settings.className).change(function(){
          var locations = $(this).val();
          if( locations !== '#' ) {
            window.location.href = $(this).val();
          };
        });

      }); // End this.each

      return this;

    };
  })(jQuery);;
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
  
    });

})(jQuery);
;
