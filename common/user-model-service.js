(function() {
	'use strict';
	var $User =  function() {
		var service = {};
		
		// stub out paths
		service.id = null;
		
		return service;		
	}
	
	angular.module('UserModels', [])
		.service('$User', $User);
	
})();