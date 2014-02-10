
	
	$(function() {
		$('body').hammer().on('touch', '.key', function (event) {
			var $this = $(this);
			var keyVal = $(this).attr('data-key');
			var rand = Math.floor(Math.random()*10000000);
			console.log('Key/mouse downed:', keyVal);
			$.get('/keydown/'+keyVal+'?'+rand, function(response) {
				console.log('response:', response);
				$this.css('background', '#F0F');
			}) 
			event.preventDefault();
			return false;
		});
		$('body').hammer().on('release', '.key', function (event) {
			var $this = $(this);
			var keyVal = $(this).attr('data-key');
			var rand = Math.floor(Math.random()*10000000);
			console.log('Key/mouse upped:', keyVal);
			$.get('/keyup/'+keyVal+'?'+rand, function(response) {
				
				$this.css('background', '');
			});
			event.preventDefault();
			return false;
		}); 
	});
