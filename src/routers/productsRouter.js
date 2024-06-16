import { Router } from 'express';
import createError from 'http-errors';
import { getAllProducts, getProductById } from '../services/products.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/products', async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found products!',
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/products/:productId', isValidId, async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await getProductById(productId);

    if (!product) return next(createError(404, 'Product not found'));

    res.status(200).json({
      status: 200,
      message: `Successfully found product with id ${productId}!`,
      data: product,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
