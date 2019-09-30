
const Offers = require("./offers");

class Basket {
    constructor(pricingRules) {
        this.items = [];
        this.pricingRules = pricingRules;
    }

    add(item) {
        this.items.push(item);
    }

    total() {
        let total = 0;
        if (this.pricingRules.length > 0) {
            this.pricingRules.forEach((rule) => {
                const itemsOnOffer = this.items.filter((item) =>
                    item.offerCd === rule.offerCd
                );
                let currTotal = 0;
                if (itemsOnOffer.length >= 1) {
                    switch (rule.offerCd) {
                        case "offer001": {
                            currTotal = Offers.buyOneGetOneFree(itemsOnOffer[0].price, itemsOnOffer.length);
                            break;
                        }
                        case "offer002": {
                            currTotal = Offers.bulkBuyDiscount(itemsOnOffer[0].price, itemsOnOffer.length, rule.discountPercent, rule.minProducts);
                            break;
                        }
                        default: {
                            currTotal = currTotal;
                            break;
                        }
                    }
                }

                total += currTotal;
            });
            var itemsNotOnOffer = this.items.filter((item) => !item.offerCd);
            return total + itemsNotOnOffer.reduce((acc, item) => { return acc + item.price }, 0);
        }
        else {
            return this.items.reduce((acc, item) => { return acc + item.price }, 0);
        }



    }
}

module.exports = Basket;