(function() {
	'use strict';
	
	var AssignmentDetailsController = function(assignmentList, submissions){
		this.assignmentList = assignmentList;
		this.submissions = submissions;
	};
	
	angular.module('greenBoard.assignments')
		.controller('AssignmentDetailsController', ['assignmentList', 'submissions',  AssignmentDetailsController])
})();
