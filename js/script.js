$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
        });
        
        $(function(){
            $('#myFormSubmit').click(function(e){
              e.preventDefault();
              $('#formResults').text($('#myForm').serialize());
              /*
              $.post('http://path/to/post', 
                 $('#myForm').serialize(), 
                 function(data, status, xhr){
                   // do something here with response;
                 });
              */
            });
        });
});