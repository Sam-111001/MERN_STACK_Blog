export const errorHandler = (errorCode, errorMessage) => {
  const error = new Error();
  error.errorCode = errorCode;
  error.message = errorMessage;
  return error;
};
