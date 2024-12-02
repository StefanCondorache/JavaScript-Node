const mongoose = require('mongoose')


const connectDB = (url, DBname) => {
    return mongoose.connect(url, { dbName: DBname })
}

module.exports = connectDB;
        