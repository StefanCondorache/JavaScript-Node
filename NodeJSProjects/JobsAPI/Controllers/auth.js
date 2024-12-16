const User = require('../Models/User')
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../Errors/');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')

const register = async (req, res) => {
///////////////////////////////////////////////////////////////////////////////////////////////
    // the code bellow is a usual, but superfficial
    
    // const { name, email, password } = req.body;

    // if( !name || !email || !password ){
    //     throw new BadRequestError("Please provide name, email and password");
    // }
//////////////////////////////////////////////////////////////////////////////////////////////
    // The code bellow has been written in User model for readability

    // const { name, email, password } = req.body;

    // const salt = await bcrypt.genSalt(10); 
    // const hashedPassword = await bcrypt.hash(password, salt);

    // const tempUser = { name, email, password : hashedPassword }

//////////////////////////////////////////////////////////////////////////////////////////////

    
    const user = await User.create({ ...req.body })     // bad practice because we can't handle each case like above
                                                        // but will be handled in other code
    // const token = jwt.sign(                             
    //     { userId : user._id, name : user.name },
    //      process.env.JWT_SECRET,
    //       { expiresIn : '30d' }
    //     )
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user : { name : user.name }, token })        

}

const login = async (req, res) => {
    const { email, password } = req.body;

    if( !email || !password ){
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({ email });
    const isPasswordCorrect = await user.comparePassword(password);

    if( !user || !isPasswordCorrect ){
        throw new UnauthenticatedError('Invalid Creditantials');
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user : { name : user.name }, token })
}


module.exports = {
    register,
    login
}