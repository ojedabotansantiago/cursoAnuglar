var app = angular.module('marketApp', []);

app.config(function($routeProvider) {
    $routeProvider
        .when('/m', {
            controller: 'supermarketController',
            templateUrl: './app/partials/market.html'
        })
        .when('/n/:productID', {
            controller: 'productController',
            templateUrl: './app/partials/table.html'
        })
        .otherwise({ redirectTo: '/m' });
});