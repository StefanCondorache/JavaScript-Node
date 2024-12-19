// const errorHandlerMiddleware = (err, req, res, next) => {
//     return res.status(err.status).json({ msg : err.message });
// }

// module.exports = errorHandlerMiddleware

const CustomAPIError = require('../Errors/custom-api');
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong"
  }

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })   // isn't needed anymore
  // }

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors).map((item) => item.message).join(',')
    customError.statusCode = StatusCodes.BAD_REQUEST
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field , please choose another value`
    customError.statusCode = StatusCodes.BAD_REQUEST
  }

  if(err.name === "CastError"){
    customError.msg = `No items were found with id: ${err.value}`
    customError.statusCode = StatusCodes.NOT_FOUND
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware