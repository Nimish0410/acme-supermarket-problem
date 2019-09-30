
const PricingRules = require("./pricingRules");
const Basket = require("./basket");

var b1 = new Basket(PricingRules);

var item1 = {
    name: "Strawberries",
    code: "SR1",
    price: 5.00,
    offerCd: "offer002"
}
var item2 = {
    name: "Fruit tea",
    sku: "FR1",
    price: 3.11,
    offerCd: "offer001"
}

var item3 = {
    name: "Coffee",
    code: "CF1",
    price: 11.23
}

b1.add(item2); //3.11
b1.add(item2);
b1.add(item1); //4.5
b1.add(item1);
b1.add(item2);
b1.add(item2);
b1.add(item2);
b1.add(item1);
b1.add(item1);


console.log('Cart total : ' + b1.total());