(function() {
	'use strict';
	
	var AssignmentDetailsController = function(assignmentsCollection){
		this.assignmentsCollection = assignmentsCollection;
	};
	
	angular.module('greenBoard.assignments')
		.controller('AssignmentDetailsController', ['assignmentsCollection', AssignmentDetailsController])
})();
