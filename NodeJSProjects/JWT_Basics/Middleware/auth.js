const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const authorizationMIddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if( !authHeader || !authHeader.startsWith('Bearer') ){
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg : 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };

    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg : "Not authorized to access this route", error : error })
    }

    next();
    
}

module.exports = authorizationMIddleware;