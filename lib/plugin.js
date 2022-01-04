require(['gitbook', 'jQuery'], function (gitbook, $) {
	gitbook.events.bind('start', function (e, config) {
		$('.summary :contains($hide$)').css('display', 'none');
	});
	gitbook.events.bind('page.change', function (e, config) {
		$('.summary :contains($hide$)').css('display', 'none');
	});
});
