angular.module('app')
	.directive('screenMessage', function() {
	  return {
	    restrict: 'E',
	    replace: true,
	    link: function(scope, element, attrs) {
	      var message = attrs['message'];
	      var duration = attrs['duration'];
	      var explanation = attrs['explanation'];
	      $('body').append('<div class="screen-message"><h2>' + message + '</h2><p>' + explanation + '</p></div>').hide().fadeIn(1500);
        if (duration != undefined) {
          setTimeout(function() {
            $('.screen-message').fadeOut(1000).remove();
          }, duration);
        }
	    }
	  }
  });