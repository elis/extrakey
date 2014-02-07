
  
  $(function() {
  	$('body').hammer().on('touch', '.key', function (event) {
  		console.log('Key/mouse downed:', event);
  		var $this = $(this);
  		var keyVal = $(this).attr('data-key');
  		$.get('/keydown/'+keyVal, function(response) {
  			console.log('response:', response);
	  		$this.css('background', '#F0F');
  		}) 
  	});
  	$('body').hammer().on('release', '.key', function (event) {
  		var $this = $(this);
  		console.log('Key/mouse upped:', event);
  		var keyVal = $(this).attr('data-key');
  		$.get('/keyup/'+keyVal, function(response) {
  			
	  		$this.css('background', '');
  		})
  	}); 
  });
   