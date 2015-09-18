(function() {
	'use strict';
	
	var UtilityService = function(){
		var service = {};
		
		service.ENV = document.origin;
		
		service.apiBase = 'https://api.edmodo.com/';
		// storing this token here is dangerous 
		service.accessToken= 'access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
		
		return service;
	}
	
	angular.module('gb.utils', []).service('UtilityService', [UtilityService])
	
})();

// https://api.edmodo.com/     // base domain
// assignment_submissions      // Specific to the submissionsService
// ? //    query
// assignment_id=ASSIGNMENT_ID // assignment's id
// &
// assignment_creator_id=73240721 // teacher's id (use this as default until there is a method for authentication)
// &
// access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d