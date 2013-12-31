<html>
	<head>
		<link rel="stylesheet" href="<?php echo drupal_get_path('theme', 'teach_it_dframe') ?>/css/global.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo libraries_get_path('flexslider') ?>/flexslider.css" type="text/css" media="screen" />
		<script src="misc/jquery.js?v=1.4.4"></script>
		
		<!-- FlexSlider -->
	<script defer src="<?php echo drupal_get_path('theme', 'teach_it_dframe') ?>/js/teachit.js"></script>
  <script defer src="<?php echo libraries_get_path('flexslider') ?>/jquery.flexslider.js"></script>
	

  <script type="text/javascript">
    $(window).load(function(){
      $('.flexslider').flexslider({
				itemWidth:130,
				itemMargin:0,
				minItems:0,
				maxItems:7,
				move:0,
				animation:"slide",
				slideshow:false,
				slideshowSpeed:7000,
				directionNav:true,
				controlNav:false,
				prevText:"Previous",
				nextText:"Next",
				pausePlay:false,
				pauseText:"Pause",
				playText:"Play",
				randomize:false,
				animationLoop:false,
				pauseOnAction:true,
				pauseOnHover:false,
				manualControls:"",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
  </script>
	</head>
	<body style="width:980px; height: 635px;margin: 0 auto">
		<div>
			<a href="http://www.greenestreetconsignment.com">
				<img style="width: 100%" src="/sites/all/themes/teach_it_dframe/img/1122CorporatePageSplash1.png" alt="Greene Street – Shop | Recycle | Consign">
			</a>
		</div>
		<?php
		drupal_add_js('misc/collapse.js');
		$block = module_invoke('views', 'block_view', 'instagrams-block_2');
		print render($block['content']);
		?>
	</body>
</html>
