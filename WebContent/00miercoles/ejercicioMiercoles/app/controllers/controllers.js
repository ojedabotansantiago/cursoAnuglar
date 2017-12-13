app.controller('supermarketController', function($scope, customersService) {

    init();
    $scope.borrarProducto = borrarProducto;
    $scope.nuevoProducto = nuevoProducto;

    function init() {
        $scope.productos = customersService.getCustomers();
    }

    function borrarProducto(target) {
        console.log(target);
        customersService.deleteCustomer(target);
    };

    function nuevoProducto(params) {
        customersService.insertCustomer(params);
    }
});