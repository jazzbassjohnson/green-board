(function() {
	'use strict';
	
	var AssignmentDetailsController = function(assignmentDetails, submissions){
	console.log('detail controller: ', assignmentDetails, submissions)
		this.assignmentDetails = assignmentDetails;
		this.submissions = submissions;
	};
	
	angular.module('greenBoard.assignments')
		.controller('AssignmentDetailsController', ['assignmentDetails', 'submissions',  AssignmentDetailsController])
})();