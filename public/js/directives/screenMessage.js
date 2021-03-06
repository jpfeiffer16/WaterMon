angular.module('app')
	.directive('screenMessage', function() {
	  return {
	    restrict: 'E',
	    replace: true,
	    link: function(scope, element, attrs) {
	      // var message = attrs['message'],
        //     duration = attrs['duration'],
        //     explanation = attrs['explanation'];
        function showScreenMessage(message, explanation, duration, callback) {
	        
	        $('body').append('<div class="screen-message"><h2>' + message + '</h2><p>' + explanation + '</p></div>')
            .hide()
            .fadeIn(1500);
          if (duration != undefined) {
            setTimeout(function() {
              $('.screen-message').fadeOut(1000).remove();
              if (typeof(callback) == 'function') {
                callback();
              }
            }, duration);
          }
	      }
        scope.$parent.$parent.showScreenMessage = showScreenMessage;
	    }
	  };
  });