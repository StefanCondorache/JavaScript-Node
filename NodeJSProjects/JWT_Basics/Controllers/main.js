

const login = async (req, res) => {

    const { username, password } = req.body;
    if( !username.trim() || !password.trim() ){
        return res.status(400).json("Username and password are required")
    }

    res.send( 'Fake Login/Register/Signup Route' )
} 

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({ 
        msg : `Success`,
        secret : `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}