/* global angular */
(function() {
	'use strict';
	
	var AssignmentListController = function(assignmentList) {
		this.assignmentList = assignmentList;
	};
	
	angular.module('greenBoard.assignments', [
		'gb.utils',
		'ui.router',
		'ui.bootstrap',
		'userdata'
	])
	.controller('AssignmentListController', [
		'assignmentList',
	AssignmentListController])

})();