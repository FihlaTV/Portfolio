/**
 * Created by manny on 5/22/15.
 */
app.directive('navigation',	function ($rootScope, $log, $window) {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem, attrs) {
			scope.showMenu = false;
			scope.toggleMenu = function(){
				scope.showMenu = !scope.showMenu;
			}
		}
	}
});
