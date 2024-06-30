export const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.log('🚀 ~ return ~ error:', error);
      next(error);
    }
  };
};
