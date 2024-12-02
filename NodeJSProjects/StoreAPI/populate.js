require('dotenv').config({ path : 'data.env' });

const connectDB = require('./connectDB.js');
const Product = require('./Modules/product.js');

const jsonProducts = require('./products.json');
console.log(jsonProducts);


const start = async () => {
    try {
        await connectDB( process.env.MONGO_URI, process.env.MONGO_DB_NAME )
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();

