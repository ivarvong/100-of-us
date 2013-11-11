function init(final_callback) {
	Tabletop.init({ 
	key: '0As1Yq-MxSBt2dG5XOTdkWVYwSkg2R1k1S0YxdHdrb2c',
	callback: function(data, tabletop) { 
		final_callback(data);
	},
	simpleSheet: true 
	})
}
$(document).ready(function() {
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var $container = $('.container');
	init(function(data) {
		data.forEach(function(item){
			$container.append( template(item) );
		});
		$('.photo').on('click', function(el) {
			$(this).find('.inner').css('display', 'block');
			var img_tag = "<img src='" + $(this).find('.big-img').attr('data-src') + "' />";
			//console.log(img_tag);
			$('.lightbox').html(img_tag).css('display', 'block');
		});

	});
	
});
