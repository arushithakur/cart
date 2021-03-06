var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html',
            
        })

        .state('mobile', {
            url: '/mobile',
            templateUrl: 'views/mobile.html',
            
        })

        .state('laptop', {
            url: '/laptop',
            templateUrl: 'views/laptop.html',
           
        })

         .state('speaker', {
            url: '/speaker',
            templateUrl: 'views/speaker.html',
            
        })
         .state('television', {
            url: '/television',
            templateUrl: 'views/television.html',
            
        })

         .state('cart', {
            url: '/cart',
            templateUrl: 'views/cart.html'
            
        })

          .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin.html'
            
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });

});
