(function(){
	'use strict';
	var Creator = function Creator(attrs){
		this.first_name = attrs.first_name || null;
		this.last_name = attrs.last_name || null;
		this.id = attrs.id;
		this.full_name = this.first_name + this.last_name;
		
		this.type = attrs.type;
		this.time_zone = attrs.time_zone;
		this.avatars = attrs.avatars;
		this.user_title = attrs.user_title;
		this.username = attrs.username;
		this.utc_offset = attrs.utc_offset
	};
	
	var CreatorModels = function(){
		var service = new Object();
		
		service.student = [];
		service.teacher = [];
		
		// update list of user
		service.makeCreator = function(userAttributes) {
			var newCreator = new Creator(userAttributes);
			if(!service[userAttributes.type]){
				service[userAttributes.type] = [];
			}
			
			service[userAttributes.type].push(newCreator);
			service.userHash[userAttributes.id] = newCreator;
		};
		
		
		return service;
	};
	


	angular.module('userdata', [])
		.service('CreatorModels', [CreatorModels]);
	
	
})();

/**  TODO navagate to a User's profile
 * https://api.edmodo.com/users/
 * 73240721 // student id
 * ?
 * access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d
 */