export const errorHandler = (err, req, res, next) => {
  const errStatus = err.status || 500;
  res.status(errStatus).json({
    status: errStatus,
    message: 'Something went wrong',
    error: err.message,
  });
};
