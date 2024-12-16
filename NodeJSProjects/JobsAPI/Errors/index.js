const CustomAPiError = require('./custom-api');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./not-found');
const BadRequestError = require('./bad-request');

module.exports = {
    CustomAPiError,
    UnauthenticatedError,
    NotFoundError,
    BadRequestError
}