import mongoose from 'mongoose';
import createError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { productId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return next(createError(400, 'Is not valid id!'));
  }
  next();
};
