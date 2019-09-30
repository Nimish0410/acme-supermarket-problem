const buyOneGetOneFree = (productPrice, numOfItems) => {
    const remainder = Math.ceil(numOfItems / 2);
    let total = (remainder * productPrice);
    return total;
}

const bulkBuyDiscount = (productPrice, numOfItems, discountPercent, minProducts) => {
    let total;
    if (numOfItems >= minProducts) {
        total = (numOfItems * productPrice) - ((discountPercent / 100) * numOfItems * productPrice);
    } else {
        total = numOfItems * productPrice;
    }
    return total;
}

module.exports = {
    buyOneGetOneFree: buyOneGetOneFree,
    bulkBuyDiscount: bulkBuyDiscount
}