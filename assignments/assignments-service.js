(function() {
	'use strict';
	
	var AssignmentsService = function($http, $q, UtilityService) {
		var service = {};
		var cache = {};
		var cacheIT = function(assignment) {
			cache[assignment.id] = assignment;
		};
		
		// get all assignments
		// use the pages arguement to request additial pages if available
		service.getAll = function(pages) {
			var deferred = $q.defer();
			
			// construct an api
			var api =[UtilityService.apiBase,'assignments?',UtilityService.accessToken,'&page=',pages || 1].join('');
			
			// make a call to the api to retrieve all assiments for this teacher
			$http.get(api).then(
				function(res) {
					// cache all items in this service for instant look up later
					res.data.forEach(cacheIT);

					deferred.resolve(res.data);
				},
				function(err) {
					deferred.reject(err);	
					throw err;
				}
			);
			
			return deferred.promise;
		};
		
		service.get = function(assignment_id) {
			console.log('get one assignment', cache[assignment_id]);
			return cache[assignment_id];
		};
		
		return service;
	}
	
	
	angular.module('greenBoard.assigments')
	.service('AssignmentsService', ['$http', '$q', 'UtilityService', AssignmentsService]);
	
})();