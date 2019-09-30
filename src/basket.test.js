const Basket = require('./basket');

describe('Basket', () => {
    it('should instantiate basket with empty items list and any rules provided', () => {
        const pricingRules = [{
            offer: "BOGO",
            offerCd: "offer001"
        }];

        const basket = new Basket(pricingRules);
        expect(basket.items).toEqual([]);
        expect(basket.pricingRules).toEqual([...pricingRules]);
    });

    describe('add', () => {
        it('should add a product to the basket', () => {
            const pricingRules = [{
                offer: "BOGO",
                offerCd: "offer001"
            }];
            const item = {
                name: "Fruit tea",
                sku: "FR1",
                price: 3.11,
                offerCd: "offer001"
            }
            const basket = new Basket(pricingRules);
            basket.add(item);
            expect(basket.items[0].sku).toEqual('FR1');
        });
    });

    describe('total', () => {
        it('should calculate total price of items in the basket', () => {
            const pricingRules = [];
            const item1 = {
                name: "Fruit tea",
                sku: "FR1",
                price: 3.11,
                offerCd: "offer001"
            }
            const item2 = {
                name: "Strawberry",
                sku: "SR1",
                price: 5.00,
                offerCd: "offer002"
            }
            const basket = new Basket(pricingRules);
            basket.add(item1);
            basket.add(item2);
            const total = basket.total();
            expect(total).toBe(8.11);
        });
        it('should calculate total with BOGOF rule enabled', () => {
            const pricingRules = [{
                offer: "BOGO",
                offerCd: "offer001"
            }];
            const basket = new Basket(pricingRules);
            const item1 = {
                name: "Fruit tea",
                sku: "FR1",
                price: 3.11,
                offerCd: "offer001"
            }
            basket.add(item1);
            basket.add(item1);
            const total = basket.total();
            expect(total).toBe(3.11);
        });
        it('should calculate total with bulk rule enabled', () => {
            const pricingRules = [{
                offer: "BULK_BUY",
                minProducts: 3,
                discountPercent: 10,
                offerCd: "offer002"
            }];
            const item = {
                name: "Strawberry",
                sku: "SR1",
                price: 5.00,
                offerCd: "offer002"
            }
            const basket = new Basket(pricingRules);
            basket.add(item);
            basket.add(item);
            basket.add(item);
            basket.add(item);
            const total = basket.total();
            expect(total).toBe(18);
        });
        it('should calculate total correctly with both rules enabled', () => {
            const pricingRules = [
                {
                    offer: "BOGO",
                    offerCd: "offer001"
                },
                {
                    offer: "BULK_BUY",
                    minProducts: 3,
                    discountPercent: 10,
                    offerCd: "offer002"
                }
            ]

            const item2 = {
                name: "Strawberries",
                code: "SR1",
                price: 5.00,
                offerCd: "offer002"
            }
            const item1 = {
                name: "Fruit tea",
                sku: "FR1",
                price: 3.11,
                offerCd: "offer001"
            }

            const basket = new Basket(pricingRules);
            basket.add(item1);
            basket.add(item1);
            basket.add(item2);
            basket.add(item2);
            basket.add(item2);
            basket.add(item2);
            const total = basket.total();
            expect(total).toBe(21.11);
        });
    });
});