
'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var angular = require('angular');


var out = process.stdout.write.bind(process.stdout);
var err = process.stderr.write.bind(process.stderr);

afterEach(function () {
	process.stdout.write = out;
	process.stderr.write = err;
});

it('should run unit test and pass', function (cb) {
	assert(true);
	cb();
});

describe("Main Test Suite AppController", function(){

	var $scope, $appCtrl, $state, $rootscope, $homeCtrl;

	beforeEach(angular.mock.module("app"));

	beforeEach(function () {
		$state = {};
		module('app', function ($provide) {
			$provide.value('$state', $state);
		});

		inject(function ($injector, $controller) {
			$state = $injector.get('$state');
			$scope = $injector.get('$rootScope').$new();
			$rootscope = $injector.get('$rootScope');

			$appCtrl = $controller('AppController', {
				$scope: $scope,
				$state: $state
			});

		});

	});

	describe("Testing Routes", function(){
		it('should route to the home page.', function ($state) {
			var state = $state.get('home');
			assert.isDefined(state.templateUrl());
			expect(state.templateUrl()).to.equal('home/home.html');
		});


	});

	describe("Test Suite for Home Controller", function(){
		var $httpBackend;
		beforeEach(function () {
			inject(function ($injector, $controller,$httpBackend) {
				$httpBackend = $httpBackend;
				$scope = $injector.get('$rootScope').$new();
				$homeCtrl = $controller('HomeController', {
					$scope: $scope
				});

			});
		});

		it("should fetch Question Details ", function(){
			$homeCtrl.inputQuery = "css";
			$homeCtrl.questions= [];
			var url = 'https://api.stackexchange.com/2.2/search?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=2&pagesize=50&fromdate=1482192000&todate=1483920000&order=desc&min=1483488000&max=1483920000&sort=activity&tagged='+$homeCtrl.inputQuery+'&intitle='+$homeCtrl.inputQuery+'&filter=default'
			$httpBackend.when('GET', url).then(function(resp){
				$homeCtrl.questions = resp.data.items;
			});

			$httpBackend.flush(); /* simulates the async calls completing, so they can be tested synchronously.*/

			expect($homeCtrl.questions[0]).have.key('title');
			expect($homeCtrl.questions[0]).have.key('score');
			expect($homeCtrl.questions[0]).have.key('view_count');	




		});



	});


});