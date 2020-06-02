const products = [
    {
        name : "reese's peanut butter cup",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 0.99,
        tags : {readytoeat: false, frozen: false, refrigerated: false, nonperishable: true},
        imageURL: "https://media02.stockfood.com/previews/ODAyNjcxNg==/00668893-A-Peanut-Butter-Cup-with-a-Bite-Taken-Out-on-a-White-Background.jpg"
    },
    {
        name : "broccoli",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : true,
        nutFree : true,
        organic : true,
        price : 1.99,
        tags : {readytoeat: false, frozen: false, refrigerated: true, nonperishable: false},
        imageURL : "https://media01.stockfood.com/previews/MTQ4NDMwMzUy/12369196-Fresh-broccoli-on-a-wooden-board.jpg"
    },
    {
        name : "bread",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : true,
        nutFree : true,
        organic : true,
        price : 2.49,
        tags : {readytoeat: false, frozen: false, refrigerated: false, nonperishable: false},
        imageURL : "https://media01.stockfood.com/previews/MTUwODE0NzUy/12567896-French-white-bread-sliced.jpg"
    },
    {
        name : "peanut butter and jam sandwich",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : true,
        nutFree : false,
        organic : false,
        price : 2.99,
        tags : {readytoeat: true, frozen: false, refrigerated: false, nonperishable: false},
        imageURL : "https://media01.stockfood.com/previews/MTM1MTU4NjQw/11263220-A-peanut-butter-and-jam-sandwich-with-a-glass-of-milk.jpg"
    },
    {
        name : "milk",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : false,
        nutFree : true,
        organic : true,
        price : 3.99,
        tags : {readytoeat: false, frozen: false, refrigerated: true, nonperishable: false},
        imageURL : "https://media01.stockfood.com/previews/NTMzNDMxMg==/00444526-Milk-in-glass-and-glass-jug.jpg"
    },
    {
        name : "peanut butter",
        vegetarian : true,
        glutenFree : true,
        lactoseFree : true,
        nutFree : false,
        organic : true,
        price : 4.99,
        tags : {readytoeat: false, frozen: false, refrigerated: false, nonperishable: true},
        imageURL : "https://media01.stockfood.com/previews/MTQ3NjUzMTM2/12304428-Jar-of-homemade-chunky-peanut-butter.jpg"
    },
    {
        name : "peanut butter cookies",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 4.99,
        tags : {readytoeat: false, frozen: false, refrigerated: false, nonperishable: true},
        imageURL: "https://media02.stockfood.com/previews/MTUwNzE1NTQ4/12559629-Salted-peanutbutter-cokies-keto-lowcarb-dairyfree-glutenfree.jpg"
    },
    {
        name : "ham sandwich",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : true,
        nutFree : true,
        organic : false,
        price : 5.99,
        tags : {readytoeat: true, frozen: false, refrigerated: false, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTM1NjI0MzM2/11302028-A-ham-sandwich-with-cucumber-tomato-and-lettuce.jpg"
    },
    {
        name : "peanut butter cheeseburger",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 8.99,
        tags : {readytoeat: true, frozen: false, refrigerated: false, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTM4MDcxNDk2/11505958-A-double-bacon-cheeseburger.jpg"
    },
    {
        name : "cheese pizza",
        vegetarian : true,
        glutenFree : false,
        lactoseFree : false,
        nutFree : true,
        organic : false,
        price : 9.49,
        tags : {readytoeat: false, frozen: true, refrigerated: false, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTQ4MDk2MTUy/12341346-Pizza-with-cheese-and-tomatoes.jpg"
    },
    {
        name : "peanut pad thai",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : true,
        nutFree : false,
        organic : false,
        price : 9.99,
        tags : {readytoeat: true, frozen: false, refrigerated: false, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTQ5MTU3MDk2/12429758-Pad-thai-stir-fried-noodles-with-prawns-chilli-beans-sprouts-spring-onions-carrots-crab-meat-shredded-apple.jpg"
    },
    {
        name : "pepperoni pizza",
        vegetarian : false,
        glutenFree : false,
        lactoseFree : false,
        nutFree : true,
        organic : false,
        price : 10.49,
        tags : {readytoeat: false, frozen: true, refrigerated: false, nonperishable: false},
        imageURL: "https://media02.stockfood.com/previews/MTQ4NTcwMzA4/12380859-Whole-Pepperoni-Pizza-on-White.jpg"
    },
    {
        name : "peanut crusted fish",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : true,
        nutFree : false,
        organic : false,
        price : 10.99,
        tags : {readytoeat: false, frozen: true, refrigerated: false, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTM3NDY5NzY4/11455814-Nut-crusted-barramundi-and-rosti.jpg"
    },
    {
        name : "stuffed chicken breast",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : false,
        nutFree : true,
        organic : false,
        price : 12.99,
        tags : {readytoeat: false, frozen: false, refrigerated: true, nonperishable: false},
        imageURL: "https://media02.stockfood.com/previews/MTQ5MjIzNzA4/12435309-Chicken-breast-stuffed-with-cranberry-and-soft-cheese.jpg"
    },
    {
        name : "salmon",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : true,
        nutFree : true,
        organic : true,
        price : 14.99,
        tags : {readytoeat: false, frozen: false, refrigerated: true, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTM0NzIxNTc2/11226798-A-Fresh-Filet-of-Salmon-with-Fresh-Basil-Leaves.jpg"
    },
    {
        name : "walnut & brie stuffed pork",
        vegetarian : false,
        glutenFree : true,
        lactoseFree : false,
        nutFree : false,
        organic : false,
        price : 15.99,
        tags : {readytoeat: false, frozen: false, refrigerated: true, nonperishable: false},
        imageURL: "https://media01.stockfood.com/previews/MTM4MTIwNjAw/11510050-Stuffed-pork-roulade-for-Christmas-dinner.jpg"
    }
];

function restrictListProducts(prods, restrictions) {
    let product_names = [];
    for (let i = 0; i < prods.length; i += 1) {

        let passesRestrictions = true;
        for (let j = 0; j < restrictions.length; j += 1) {
            if (prods[i][restrictions[j]] === false) {
                passesRestrictions = false;
            }
        }
        let passesFilter = true;
        if (selectedFilter !== "---") {
            let prodTags = prods[i].tags;
            if (prodTags[selectedFilter] === false) {
                passesFilter = false;
            }
        }
        if (passesRestrictions && passesFilter) {
            product_names.push(prods[i].name);
        }
    }
    return product_names;
}

function filterRefresh(filter) {
    selectedFilter = filter;
    populateListProductChoices(null, 'displayProduct');
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