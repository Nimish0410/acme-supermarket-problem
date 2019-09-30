# ACME Supermarket

Create a solution for the ACME Supermarket problem.

## Description of the problem

ACME's quest for global domination has prompted us to open a supermarket – we sell only three products:

    Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23

Our CEO is a big fan of buy-one-get-one-free offers and of fruit tea. He wants us to add a rule to do this.

The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50.
Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

The interface to our basket looks like this (shown in JavaScript):

    var basket = new Basket(pricingRules)
    basket.add(item)
    basket.add(item)
    var price = basket.total()

Implement a basket system that fulfills these requirements in JavaScript.

Test Data:

    Basket: FR1, SR1, FR1, CF1
    Total price expected: £19.34

    Basket: FR1, FR1
    Total price expected: £3.11

    Basket: SR1, SR1, FR1, SR1
    Total price expected: £16.61

# Solution

# Basket logic has been implemented in Object oriented javascript. Using react would have been an overkill here since the focus is on the implementation of the basket.

# Application can be run using npm start and the cart total would be displayed in the terminal.

# Jest has been used for unit test cases.

# Run npm run test for test cases.

# The app is split across various modules
    - app.js which initializaion and invokes the basket functionality.
    - basket.js creates the basket class with methods to add items to cart and calculate total of the cart through runniing the pricing rules.(as per the interface in the prolem statement)
    - pricingRules.js specifies BOGO and BULK_BUY rules that will run on the items in the cart. This can be scaled to add/delete rules applied on cart items
    - products.js holds all the products that acme super market does.
    - offer.js holds the definition of what every offer does to the items on the cart.
    