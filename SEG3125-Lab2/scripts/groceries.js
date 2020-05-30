const products = [
    {
        name : "reese's peanut butter cup",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 0.99
    },
    {
        name : "broccoli",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : true,
        nutFree : true,
        organic : true,
        price : 1.99
    },
    {
        name : "bread",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : true,
        nutFree : true,
        organic : true,
        price : 2.49
    },
    {
        name : "peanut butter and jam sandwich",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : true,
        nutFree : false,
        organic : false,
        price : 2.99
    },
    {
        name : "milk",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : false,
        nutFree : true,
        organic : true,
        price : 3.99
    },
    {
        name : "peanut butter",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : true,
        nutFree : false,
        organic : true,
        price : 4.99
    },
    {
        name : "peanut butter cookies",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 4.99
    },
    {
        name : "ham sandwich",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : true,
        nutFree : true,
        organic : false,
        price : 5.99
    },
    {
        name : "peanut butter cheeseburger",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 8.99
    },
    {
        name : "cheese pizza",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : false,
        nutFree : true,
        organic : false,
        price : 9.49
    },
    {
        name : "peanut pad thai",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : true,
        nutFree : false,
        organic : false,
        price : 9.99
    },
    {
        name : "pepperoni pizza",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : false,
        nutFree : true,
        organic : false,
        price : 10.49
    },
    {
        name : "peanut crusted fish",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : true,
        nutFree : false,
        organic : false,
        price : 10.99
    },
    {
        name : "stuffed chicken breast",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : false,
        nutFree : true,
        organic : false,
        price : 12.99
    },
    {
        name : "salmon",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : true,
        nutFree : true,
        organic : true,
        price : 14.99
    },
    {
        name : "walnut & brie stuffed pork",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 15.99
    }
];

function restrictListProducts(prods, restrictions) {
    let product_names = [];
    for (let i = 0; i < prods.length; i += 1) {

        if ( restrictions.length === 0 ) {
            if (!product_names.includes(prods[i].name)) {
                product_names.push(prods[i].name);
            }
        }
        else {
            let passesRestrictions = true;
            for (let j = 0; j < restrictions.length; j += 1) {
                if (prods[i][restrictions[j]] === false) {
                    passesRestrictions = false;
                }
            }
            if (passesRestrictions) {
                product_names.push(prods[i].name);
            }
        }
    }
    return product_names;
}

function getTotalPrice(chosenProducts) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}