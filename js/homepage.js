$(function initHomepage() {

	$.tab();

	current = 1;

	$('#otherExample')
	  .on('click', function() {
	    current = ((current + 1) % 3) + 1;
	    $.tab('change tab', 't'+current);
	  });

	$('#masthead .card').transition('browse');
});
