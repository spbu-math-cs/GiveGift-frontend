export const checkPrice = (minPrice, maxPrice, newPrice) => {
  let [newStartPrice, newEndPrice] = newPrice;

  if (newEndPrice < newStartPrice) {
    newStartPrice = newEndPrice - 1;
  }

  return [
    newStartPrice < minPrice ? minPrice : newStartPrice,
    newEndPrice > maxPrice ? maxPrice : newEndPrice,
  ];
};

export const checkZoom = (minScale, maxScale, newScale) => {
  if (minScale > newScale) {
    newScale = minScale;
  } else if (newScale > maxScale) {
    newScale = maxScale;
  }
  return newScale
};

export const isAuthError = (error) => {
  return error && error.status === 401;
};

export const isObjectEmpty = (object) => {
  return Object.keys(object).length === 0;
};
