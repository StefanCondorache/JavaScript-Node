// const errorHandlerMiddleware = (err, req, res, next) => {
//     return res.status(err.status).json({ msg : err.message });
// }

// module.exports = errorHandlerMiddleware

const CustomAPIError = require('../Errors/custom-api');
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandlerMiddleware