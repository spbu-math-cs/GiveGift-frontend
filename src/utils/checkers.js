export const checkPrice = (minPrice, maxPrice, newPrice) => {
    let [newStartPrice, newEndPrice] = newPrice;

    if (newEndPrice < newStartPrice) {
        newStartPrice = newEndPrice - 1;
    }

    return [
        (newStartPrice < minPrice) ? minPrice : newStartPrice,
        (newEndPrice > maxPrice) ? maxPrice : newEndPrice
    ];
}

export const isObjectEmpty = (object) => {
    return Object.keys(object).length === 0
}