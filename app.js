(function(){
	'use strict';
	
	angular.module('greenBoard', [
		'ui.router',
		'UserModels',
		'gb.utils',
		'greenBoard.assigments',
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
				url: '/assignments/:assignment_ID&:creator',
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
						return AssignmentsService.get($stateParams.assignment_ID, $stateParams.creator ) || null;
					}]
				},
			});
	
	});
	
	// Test
})();