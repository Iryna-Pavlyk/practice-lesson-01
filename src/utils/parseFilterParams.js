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
  console.log('🚀 ~ parseNumber ~ isString:', isString);
  console.log(typeof number);
  if (!isString) return;

  const parsedNumber = parseInt(number);
  console.log('🚀 ~ parseNumber ~ parsedNumber:', parsedNumber);
  if (Number.isNaN(parsedNumber)) return;

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { category, minNumber, maxNumber } = query;

  const parsedCategory = categoryFilter(category);
  const parsedMinNumber = parseNumber(minNumber);
  const parsedMaxNumber = parseNumber(maxNumber);

  return {
    category: parsedCategory,
    minPrice: parsedMinNumber,
    maxPrice: parsedMaxNumber,
  };
};
