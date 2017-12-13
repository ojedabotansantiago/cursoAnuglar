//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function() {
    this.getCustomers = function() {
        return customers;
    };

    this.insertCustomer = function(params) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            producto: params.producto,
            precio: params.precio,
            city: params.city
        });
    };

    this.deleteCustomer = function(id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getCustomer = function(id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    var customers = [{
            id: 1,
            producto: 'Lee',
            precio: 'Carroll',
            address: '1234 Anywhere St.',
            city: 'Phoenix'
        },
        {
            id: 2,
            producto: 'Jesse',
            precio: 'Hawkins',
            address: '89 W. Center St.',
            city: 'Atlanta'
        },
        {
            id: 3,
            producto: 'Charles',
            precio: 'Sutton',
            address: '455 7th Ave.',
            city: 'Quebec'
        },
        {
            id: 4,
            producto: 'Albert',
            precio: 'Einstein',
            address: '8966 N. Crescent Dr.',
            city: 'New York City'
        },
        {
            id: 5,
            producto: 'Sonya',
            precio: 'Williams',
            address: '55 S. Hollywood Blvd',
            city: 'Los Angeles'
        },
        {
            id: 6,
            producto: 'Victor',
            precio: 'Bryan',
            address: '563 N. Rainier St.',
            city: 'Seattle'
        },
        {
            id: 7,
            producto: 'Lynette',
            precio: 'Gonzalez',
            address: '25624 Main St.',
            city: 'Albuquerque'
        },
        {
            id: 8,
            producto: 'Erick',
            precio: 'Pittman',
            address: '33 S. Lake Blvd',
            city: 'Chicago'
        },
        {
            id: 9,
            producto: 'Alice',
            precio: 'Price',
            address: '3354 Town',
            city: 'Cleveland'
        },
        {
            id: 10,
            producto: 'Gerard',
            precio: 'Tucker',
            address: '6795 N. 53 W. Bills Dr.',
            city: 'Buffalo'
        },
        {
            id: 11,
            producto: 'Shanika',
            precio: 'Passmore',
            address: '459 S. International Dr.',
            city: 'Orlando'
        }
    ];

});