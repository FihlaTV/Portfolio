/**
 * Created by manny on 5/22/15.
 */
app.directive('navigation',	function ($rootScope, $log, $window) {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem, attrs) {
			scope.showMenu = false;
			scope.toggleMenu = function(callback){
				scope.showMenu = !scope.showMenu;
				if(callback)
					callback();
			}
			scope.offset = attrs.offset || 0;
			scope.scrollTo = function (divName) {
				var gotoY = $('#' + divName).offset().top - scope.offset;

				scope.toggleMenu(function(){
					// using jquery to animate
					$('html, body').animate({ scrollTop: gotoY }, 800); 
				});
			};
		}
	}
});
