/* global angular */
(function() {
	'use strict';
	
	var AssignmentsController = function(selectedAssignment, submissionsCollection, assignmentsCollection, SubmissionsService, AssignmentsService) {
		this.submissionsCollection = submissionsCollection;
		console.log(submissionsCollection)
		this.assignmentsCollection = assignmentsCollection;
		this.selectedAssignment = selectedAssignment;
	};
	
	angular.module('greenBoard.assigments', [
		'gb.utils',
		'ui.router',
		'ui.bootstrap',
		'UserModels'
	])
	.controller('AssignmentsController', [
		'selectedAssignment',
		'submissionsCollection',
		'assignmentsCollection',
		'SubmissionsService',
		'AssignmentsService',
	AssignmentsController])
	
})();