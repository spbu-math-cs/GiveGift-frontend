export const checkPrice = (minPrice, maxPrice, newStartPrice, newEndPrice) => {
    console.log({newStartPrice, newEndPrice});
    if (newEndPrice < newStartPrice) {
        newStartPrice = newEndPrice - 1;
    }

    return [
        (newStartPrice < minPrice) ? minPrice : newStartPrice,
        (newEndPrice > maxPrice) ? maxPrice : newEndPrice
    ];
}