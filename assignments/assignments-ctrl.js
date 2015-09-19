/* global angular */
(function() {
	'use strict';
	
	var AssignmentsController = function(selectedAssignment, submissionsCollection, assignmentsCollection, SubmissionsService, AssignmentsService) {
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
	.controller('AssignmentsController', [
		'selectedAssignment',
		'submissionsCollection',
		'assignmentsCollection',
		'SubmissionsService',
		'AssignmentsService',
	AssignmentsController])

})();