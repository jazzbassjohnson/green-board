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
		$urlRouterProvider.otherwise('/assingments');
		
		// Now set up the states
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'dashboard.html'
			})
			.state('assignments', {
				url: '/assignments/:creator_ID/:assignment_ID/',
				views: {
					'': {},
					'sidebar@assignments' : {
						
					},
					'details@assignments': {
						templateURL: 'assignments/parials/partial-details.html',
						controller: 'AssignmentDetailsController',
						controllerAs: 'ADCtrl',
						resolve: {
							assignmentDetails: ['$stateParams', 'AssignmentService', function($stateParams, AssignmentService){
								return AssignmentService.getDetails($stateParams.assignementID, $stateParams)
							}],
							submissions: [function() {
								
							}];
						}
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