import createError from 'http-errors';
import {
  addProducts,
  deleteProducts,
  getAllProducts,
  getProductById,
  updateProducts,
} from '../services/products.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res) => {
  const { sortOrder, sortBy } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const products = await getAllProducts({
    sortBy,
    sortOrder,
    filter,
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;

  const product = await getProductById(productId);

  if (!product) throw createError(404, 'Product not found');

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const addProductsController = async (req, res) => {
  const product = await addProducts(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductsController = async (req, res) => {
  const result = await updateProducts(req.params.productId, req.body);

  if (!result) throw createError(404, 'Product not found');

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result,
  });
};

export const deleteProductsController = async (req, res) => {
  const result = await deleteProducts(req.params.productId);

  if (!result) throw createError(404, 'Product not found');

  res.status(204).send();
};
