(function() {
	'use strict';
	
	var AssignmentService = function($http, $q, UtilityService) {
		var service = {};
		var cache = {};
		var cacheIT = function(assignment) {
			cache[assignment.id] = assignment;
		};
		
		// get all assignments
		// use the pages arguement to request additial pages if available
		service.getAll = function(pages) {
			console.log('AssignmentService.getAll called')
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
		
		service.getDetails = function(assignment_id) {
			console.log('AssignmentService getDeatils wass called with ',assignment_id, ' as an arg')
			var deferred = $q.defer();
			
			if(cache[assignment_id]){
				deferred.resolve(cache[assignment_id]);
				return deferred.promise;	
			}
			
			var api =[UtilityService.apiBase,'assignments/', assignment_id, '?', UtilityService.accessToken].join('');
			
			$http.get(api).then(function(res) {
				deferred.resolve(res.data)
			},
			function(err) {
				deferred.reject(err);
				throw err;
			});
			
			return deferred.promise;
		};
		
		return service;
	}
	
	
	angular.module('greenBoard.assignments')
	.service('AssignmentService', ['$http', '$q', 'UtilityService', AssignmentService]);
	
})();