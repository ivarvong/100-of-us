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

	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var $thumbnails = $('.thumbnails');
	
	var build_thumbnails = function(data) {		
		data.forEach(function(item){
			$thumbnails.append( template(item) );
		});
		$('.photo').on('click', function(el) {
			$(this).find('.inner').css('display', 'block');
			var img_tag = "<img src='" + $(this).find('.big-img').attr('data-src') + "' />";
			//console.log(img_tag);
			$('.lightbox').html(img_tag).css('display', 'block');
		});

	};

	if (window.data == undefined) {
		alert('uh oh')
	} else {
		build_thumbnails(window.data);
	}
	
	
	
});
