'use strict';

var API_URL = "http://localhost:3000/api/";
var app = angular.module('myApp.view1', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', [function() {

}]);

var globalPosts = [{"quoi" : "value1"}, {"quoi" : "value2"}, {"quoi" : "value3"}, {"quoi" : "value4"}];

app.controller('NewPostController', function($http){
	this.post = {};

	this.addPost = function() {
		var post = 
			{
			  "CreationDate": new Date(),
			  "Value": this.post.quoi,
			  "AuthorId": "544f8165706d56d81561d915"
			};

		$http.post(API_URL + 'Posts', post).
		success(function(data, status, headers, config){
			console.log(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
		this.post = {};
	};

});

app.controller('PostsController', function($scope, $http){	

	var posts = [];
	$http.get(API_URL + 'Posts').
	success(function(data, status, headers, config) {
	  	angular.forEach(data, function(value, key) {	  		
		  	var author;
		  	$http.get(API_URL+'Authors/' + value.AuthorId).
			success(function(data, status, headers, config) {	
				var post =
			   	{
			   	"qui": data.name,
			   	"quand": value.CreationDate,
			   	"quoi": value.Value
			   	};
				posts.push(post);		
			}).
			error(function(data, status, headers, config) {
				alert("erreur " + data);
			});
		   	//console.log(posts);
	  	});
	}).
	error(function(data, status, headers, config) {
		alert("erreur " + data);
	});
	$scope.posts=posts;
	  
});

