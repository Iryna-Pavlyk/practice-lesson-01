import { Router } from 'express';
import { isValidId } from '../middlewares/isValidId.js';
import {
  addProductsController,
  deleteProductsController,
  getAllProductsController,
  getProductByIdController,
  updateProductsController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductsSchema,
  updateProductsSchema,
} from '../validate/productsSchemas.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));

router.get(
  '/products/:productId',
  isValidId,
  ctrlWrapper(getProductByIdController),
);

router.post(
  '/products',
  validateBody(createProductsSchema),
  ctrlWrapper(addProductsController),
);

router.patch(
  '/products/:productId',
  isValidId,
  validateBody(updateProductsSchema),
  ctrlWrapper(updateProductsController),
);

router.delete(
  '/products/:productId',
  isValidId,
  ctrlWrapper(deleteProductsController),
);

export default router;
