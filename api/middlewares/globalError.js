const globalError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: true,
    statusCode,
    message,
  });
};

export default globalError;
