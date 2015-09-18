(function() {
	'use strict';
	
	var AssignmentsService = function($http, $q, UtilityService) {
		var service = {};
		var cache = {};
		var cacheIT = function(assignment) {
			cache[assignment.id] = assignment;
		};
		
		
		service.getAll = function(pages) {
			var deferred = $q.defer();
			// Testing cron
			var api =[
				UtilityService.apiBase,
				'assignments?',
				UtilityService.accessToken,
				'&page=',
				pages || 1
				].join('');
				
			
			$http.get(api).then(
				function(res) {
					console.log('Get all data', res)
					deferred.resolve(res.data);
					res.data.forEach(cacheIT);
				}, function(err) {
					deferred.reject(err)	
					throw err
			});
			
			return deferred.promise; 
		};
		
		service.get = function(assignment_id) {
			var deferred = $q.defer();
			
			if(cache[assignment_id]) {
				deferred.resolve(cache[assignment_id]);
			} else {
				deferred.resolve({name: 'No Result'})
			}
			
			// service.getBatch().then(function() {
			// 	if(cache[assignment_id]) {
			// 		deferred.resolve(cache[assignment_id]);
			// 	} else {
					
			// 	}
			// });
			
			return deferred.promise;
		};
		
		return service;
	}
	
	
	angular.module('greenBoard.assigments')
	.service('AssignmentsService', ['$http', '$q', 'UtilityService', AssignmentsService]);
	
})();