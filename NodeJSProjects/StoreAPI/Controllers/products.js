const Product = require('../Modules/product.js')

const getAllProductsStatic = async (req, res) => {

    const products = 
        await Product
            .find({
                price : { 
                    $gt : 30,   // greater than
                    $lt : 100,  // less than
                } 
                //name : req.query.name.trim(),
                //name : {$regex : search, $options: 'i'},  // get every product that contains in "name" "search"                          
            //});                                           // with case insensitivity (search.length <= name.length)
            })
            .select('name price')
            .sort('name') // basic sort by name; -name for ascendent 
            .limit(10)
            .skip(2) ;  
        

    res.status(200).json({ msg : products, nbHits : products.length })
}

const getAllProducts = async (req, res) => {

    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    if( featured ){
        queryObject.featured = (featured === 'true') ? true : false;
    }
    if( company ){
        queryObject.company = company.trim();
    }
    if( name ){
        queryObject.name = {$regex : name, $options: 'i'};
    }
    if( numericFilters ){
        // numericFilters form = price>40,rating>=4

        const operatorMap = {
            '>' : '$gt',
            '>=' : '$gte',
            '=' : '$eq',
            '<' : '$lt',
            '>=' : '$lte',
        }

        const regEx = /\b(<|>|>=|<=|=)\b/g

        let filters = numericFilters.replace(
            regEx, 
            (match) => `-${operatorMap[match]}-` // price>40,rating>=4   ->   price-$gt'-40,rating-'$gte'-4
        )

        const options = [ 'price', 'rating' ];
        filters = filters.split(',').forEach( element => {
            const [field, operator, value] = element.split('-') 
            if( options.includes(field) ){
                queryObject[field] = { [ operator ] : Number(value) };
            }
        });
    }


    // const products = await Product.find(queryObject);
    let result = Product.find(queryObject);

    //  sort
    if( sort ){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    else{
        result = result.sort('createdAt');
    }

    // fields
    if( fields ){
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }
    else{
        result = result.select('name price')
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    
    // const products = await Product.find(req.query); // basic setup

    res.status(200).json({ msg : products, nbHits : products.length })


}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}