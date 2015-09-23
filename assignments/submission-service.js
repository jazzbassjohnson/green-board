(function(){
	'use strict';
	
	var SubmissionService = function($http, $q, UtilityService, CreatorModels) {
		var service = {};
		
		service.getSubmissions = function(assignment_id, creator_id) {
			console.log('submissions')
			var deferred = $q.defer();
			var api =[UtilityService.apiBase, 'assignment_submissions?', assignment_id, '&', UtilityService.accessToken].join('');
			// var api =[UtilityService.apiBase, 'assignment_submissions?', UtilityService.accessToken, '&assignment_id=', assignment_id, 'assignment_creator_id=', creator_id,].join('');
			// var api = [UtilityService.apiBase, 'assignment_submissions?', UtilityService.token, '&per_page=', page || 1].join('');
			$http.get(api).then(
				function(res) {
					deferred.resolve(res.data)
					console.log('get one submissions:', res.data)
				}, function(err) {
					deferred.resolve(err)	
					throw err
			});
			
			// return deferred.promise;
			return deferred.promise;
		};
		
		// service.getAll = function(pages) {
		// 	var deferred = $q.defer();
		// 	var api =[UtilityService.apiBase, 'assignment_submissions?', UtilityService.accessToken, '&page=', pages || 1].join('');

		// 	$http.get(api).then(
		// 		function(res) {
		// 			deferred.resolve(res.data)
		// 			console.log('get all submissions', res.data)
		// 		}, function(err) {
		// 			deferred.resolve(err)	
		// 			throw err
		// 	});
			
		// 	// return deferred.promise;
		// 	return deferred.promise; 
		// };
		
		return service;
	}
	
	angular.module('greenBoard.assignments')
	.service('SubmissionService', ['$http', '$q', 'UtilityService', 'CreatorModels', SubmissionService]);	
})();

