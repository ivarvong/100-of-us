$(document).ready(function() {

	window.light_box_active = false;
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var $thumbnails = $('.thumbnails');
	
	var show_lightbox = function(contents) {
		//console.log('show_lightbox');
		window.light_box_active = true;
		$('.lightbox-wrapper').css('display', 'block');
		$('.lightbox').html(contents).css('display', 'block');		
	}
	var hide_lightbox = function() {
		//console.log('hide_lightbox');
		$('.lightbox-wrapper').css('display', 'none');
		$('.lightbox').html('');	
		window.light_box_active = false;
	}

	var build_thumbnails = function(data) {		
		data.forEach(function(item){
			$thumbnails.append( template(item) );
		});
		$('.photo').on('click', function(el) {			
			var $inner = $(this).find('.inner');
			//var $inner_img = $inner.find('img');
			//console.log($inner_img);
			//var $inner_img.attr('src', '');
			var html = $inner.html();
			//console.log(html);			
			show_lightbox(html);
			var name = $inner.find('h2').text();
			console.log('name', name);
			ga('send', 'event', 'thumbnail', name);
		});
		$('.lightbox-wrapper').on('click', function(el) {
			if (window.light_box_active === true) {
				hide_lightbox();
			}
		});

	};

	$.getJSON("http://gdoc.columntype.com/0As1Yq-MxSBt2dG5XOTdkWVYwSkg2R1k1S0YxdHdrb2c").success(function(data) {
		//console.log(data);
		build_thumbnails(data);
	});
	
});
