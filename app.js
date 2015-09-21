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
		$urlRouterProvider.otherwise('/assingments/');
		
		// Now set up the states
		$stateProvider
		
			// Define a home 'Welcome' page
			.state('home', {
				url: '/home',
				templateUrl: '/home/partials/partial-home.html'
			})
			
			// // define a parent state
			// .state('assignments', {
			// 	url: '/assignments',
			// 	template
			// })
			
			// define an assignments state
			.state('assignments', {
				url: '/assignments/:creatorID:assignmentID',
				views: {
					'': {
						templateUrl: '/assignments/partials/partial-assignments-main.html'
					},
					'sidebar@assignments' : {
						templateUrl: '/assignments/partials/partial-sidebar.html',
						controller: 'AssignmentListController',
						controllerAs: 'ALCtrl',
						resolve: {
							assignmentList:['$stateParams', 'AssignmentService', function($stateParams, AssignmentService) {
								return AssignmentService.getAll() || [];
							}]
						}
					},
					'details@assignments': {
						templateUrl: '/assignments/partials/partial-details.html',
						controller: 'AssignmentDetailsController',
						controllerAs: 'ADCtrl',
						resolve: {
							assignmentDetails: ['$stateParams', 'AssignmentService', function($stateParams, AssignmentService){
								return !$stateParams.assignementID ? null : AssignmentService.getDetails($stateParams.assignementID); 
							}],
							submissions: ['$stateParams', 'SubmissionService', function($stateParams, SubmissionService) {
								return	!$stateParams.assignementID || !$stateParams.creatorID ? [] : SubmissionService.getSubmissions($stateParams.assignmentID, $stateParams.creatorID);
							}]
						}
					}
				}
			});
	
	});
	
	// Test
})();