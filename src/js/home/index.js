import angular from 'angular';

// module
let homeModule = angular.module('app.home', []);

// config
import HomeConfig from './home.config';
homeModule.config(HomeConfig);


// Controllers
import HomeController from './home.controller';
homeModule.controller('HomeController', HomeController);



export default homeModule;
