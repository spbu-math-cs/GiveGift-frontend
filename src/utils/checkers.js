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