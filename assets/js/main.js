// JS
$('.fixed-menu-link').click(function() {
	$(this).toggleClass('open');
	$('.fixed-menu').animate({
		height: 'toggle'
		}, 290, function() {
	});
});