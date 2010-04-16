$(document).ready(function() { 
	$("#andreaswalm").append('<div id="tooltip"></div>');
	$("#vcard a, #networks img").tooltip({
		offset: [-5, 0],
		effect: 'slide',
		tip: '#tooltip'
	}); 
	console.log("done");
});