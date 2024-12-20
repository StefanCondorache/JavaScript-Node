const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../Errors');

const auth = (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if( !authHeader || !authHeader.startsWith('Bearer ') ){
        throw new UnauthenticatedError('Authentification invalid');
    }

    const token = authHeader.split(' ')[1];

    try {

        const payload = jwt.verify( token, process.env.JWT_SECRET );

        req.user = { userId : payload.userId };

        // const user = User.findById(payload.id).select('-password')
        // req.user = user;

        next();

    } catch (error) {
        throw new UnauthenticatedError('Authentification invalid')
    }
}

module.exports = auth;