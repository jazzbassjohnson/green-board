(function() {
	'use strict';
	
	var AssignmentDetailsController = function(assignmentList){
		this.assignmentList = assignmentList;
	};
	
	angular.module('greenBoard.assignments')
		.controller('AssignmentDetailsController', ['assignmentList', AssignmentDetailsController])
})();
