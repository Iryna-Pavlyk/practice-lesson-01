import { Product } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};
