

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('app', {
            templateUrl: 'layout/app-view.html',
            controller:'AppController',
            controllerAs:'$ctrl'
        });

    $urlRouterProvider.otherwise('/home');

}

export default AppConfig;
