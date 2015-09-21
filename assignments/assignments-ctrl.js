/* global angular */
(function() {
	'use strict';
	
	var AssignmentListController = function(selectedAssignment, submissionsCollection, assignmentsCollection, SubmissionsService, AssignmentsService) {
		this.submissionsCollection = submissionsCollection;
		this.assignmentsCollection = assignmentsCollection;
		this.selectedAssignment = selectedAssignment;
		console.log('selectedAssignment', selectedAssignment)
	};
	
	angular.module('greenBoard.assigments', [
		'gb.utils',
		'ui.router',
		'ui.bootstrap',
		'userdata'
		
	])
	.controller('AssignmentListController', [
		'selectedAssignment',
		'submissionsCollection',
		'assignmentsCollection',
		'SubmissionsService',
		'AssignmentsService',
	AssignmentListController])

})();