(function(){
	'use strict';
	
	angular.module('greenBoard', [
		'ui.router',
		'gb.utils',
		'greenBoard.assigments',
		'ngAnimate'
	])
	.config(function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, redirect to /dashboard
		$urlRouterProvider.otherwise('/dashboard');
		
		// Now set up the states
		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'dashboard.html'
			})
			.state('assignments', {
				url: '/assignments/:creator_ID/:assignment_ID/',
				views: {
					sidebar@: {
						
					}
				},
				templateUrl: 'assignments/partials/partial-main.html',
				controller: 'AssignmentsController',
				controllerAs: 'AMController',
				resolve: {
					submissionsCollection: ['$stateParams', 'SubmissionsService', function($stateParams, SubmissionsService) {
						return SubmissionsService.getAll();
					}],
					assignmentsCollection: ['AssignmentsService', function(AssignmentsService) {
						return AssignmentsService.getAll();
					}],
					selectedAssignment: ['$stateParams', 'AssignmentsService', function($stateParams, AssignmentsService) {
						return AssignmentsService.get($stateParams.assignment_ID, $stateParams.creator_ID);
					}]
				},
			});
	
	});
	
	// Test
})();