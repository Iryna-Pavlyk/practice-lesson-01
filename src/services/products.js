import { SORT_ORDER } from '../constants/index.js';
import { Product } from '../db/models/products.js';

export const getAllProducts = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const productsQuery = Product.find();

  if (filter.category) {
    productsQuery.where('category').equals(filter.category);
  }

  if (filter.minPrice) {
    productsQuery.where('price').gte(filter.minPrice);
  }

  if (filter.maxPrice) {
    productsQuery.where('price').lte(filter.maxPrice);
  }

  const products = await Product.find()
    .merge(productsQuery)
    .sort({ [sortBy]: sortOrder })
    .exec();
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};

export const addProducts = async (data) => {
  const product = await Product.create(data);
  return product;
};

export const updateProducts = async (id, data) => {
  const result = await Product.findOneAndUpdate({ _id: id }, data);
  return result;
};

export const deleteProducts = async (id) => {
  console.log(id);
  const result = await Product.findOneAndDelete({ _id: id });
  return result;
};
