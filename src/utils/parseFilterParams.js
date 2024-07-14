const categoryFilter = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) => {
    return ['books', 'electronics', 'clothing', 'other'].includes(category);
  };

  if (isCategory(category)) return category;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) return;

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;

  const parsedCategory = categoryFilter(category);
  const parsedMinNumber = parseNumber(minPrice);
  const parsedMaxNumber = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinNumber,
    maxPrice: parsedMaxNumber,
  };
};
