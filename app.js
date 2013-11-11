/*
function init(final_callback) {
	Tabletop.init({ 
		key: '0As1Yq-MxSBt2dG5XOTdkWVYwSkg2R1k1S0YxdHdrb2c',
		callback: function(data, tabletop) { 
			console.log(tabletop);
			console.log(data);
			//console.log( JSON.stringify(data) );
			final_callback(data);
		},
		simpleSheet: true 
	});
}
*/
window.bootstrap_data = function(data) {
	window.data = data;
}

$(document).ready(function() {

	window.light_box_active = false;
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var $thumbnails = $('.thumbnails');
	
	var show_lightbox = function(contents) {
		console.log('show_lightbox');
		window.light_box_active = true;
		$('.lightbox-wrapper').css('display', 'block');
		$('.lightbox').html(contents).css('display', 'block');
	}
	var hide_lightbox = function() {
		console.log('hide_lightbox');
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
			console.log(html);			
			show_lightbox(html);
		});
		$('.lightbox-wrapper').on('click', function(el) {
			if (window.light_box_active === true) {
				hide_lightbox();
			}
		});

	};

	if (window.data == undefined) {
		alert('Something terrible is happening. I\'m sorry');
	} else {
		build_thumbnails(window.data);
	}
	
	
	
});
