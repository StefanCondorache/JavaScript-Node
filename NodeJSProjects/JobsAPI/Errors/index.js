const CustomAPiError = require('./custom-api');
const Unauthenticated = require('./unauthenticated');
const NotFoundError = require('./not-found');
const BadRequestError = require('./bad-request');

module.exports = {
    CustomAPiError,
    Unauthenticated,
    NotFoundError,
    BadRequestError
}