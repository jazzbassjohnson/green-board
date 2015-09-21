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
		
			// Define a home 'Welcome' page
			.state('home', {
				url: '/home',
				templateUrl: 'dashboard.html'
			})
			
			// define an assignments state
			.state('assignments', {
				url: '/assignments/:creatorID/:assignmentID/',
				views: {
					'': {
						templateUrl: 'partial-assignments-main.html'
					},
					'sidebar@assignments' : {
						templateUrl: 'assignments/partials/partial-sidebar.html',
						controller: 'AssignmentListController',
						controllerAs: 'ALCtrl',
						resolve: {
							assignmentList:['$stateParams', 'AssignmentService', function($stateParams, AssignmentService) {
								return AssignmentService.getAll() || [];
							}]
						}
					},
					'details@assignments': {
						templateUrl: 'assignments/partials/partial-details.html',
						controller: 'AssignmentDetailsController',
						controllerAs: 'ADCtrl',
						resolve: {
							assignmentDetails: ['$stateParams', 'AssignmentService', function($stateParams, AssignmentService){
								return AssignmentService.getDetails($stateParams.assignementID, $stateParams.creatorID) || null;; 
							}],
							submissions: ['$stateParams', 'SubmissionService', function($stateParams, SubmissionService) {
								return	SubmissionService.getSubmissions($stateParams.assignmentID, $stateParams.creatorID) || null;
							}]
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