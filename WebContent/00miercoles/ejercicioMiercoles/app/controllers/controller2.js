app.controller('productController', function($scope, $routeParams, customersService) {

    init();

    function init() {
        var customerID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
        if (customerID > 0) {
            $scope.customer = JSON.stringify(customersService.getCustomer(customerID));
        }
    }
});