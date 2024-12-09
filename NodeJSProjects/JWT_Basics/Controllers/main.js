const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const login = async (req, res) => {

    const { username, password } = req.body;
    if( !username.trim() || !password.trim() ){
        return res.status(StatusCodes.BAD_REQUEST).json("Username and password are required")
    }
    
    // just for demo, normally provided by DB
    const id = new Date().getDate();

    // smaller payload, better experience for user
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn : '30d' });

    res.status(StatusCodes.OK).json({ msg : 'user created', token })
} 

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random()*100);

    res.status(StatusCodes.OK).json({ 
        msg : `Success, ${req.user.username}`,
        secret : `Here is your authorized data, your lucky number is ${luckyNumber}`
    })

}

module.exports = {
    login,
    dashboard
}