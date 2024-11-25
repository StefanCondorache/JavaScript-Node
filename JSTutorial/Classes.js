
// class Product {

//     static nrProducts = 0;     // static is a keyword that defines properties of the class. It can variable as well as a function

//     constructor(name, price){

//         this.name = name;
//         this.price = price;

//         Product.nrProducts++;
//         console.log(`New product named ${this.name}! There are ${Product.nrProducts} products already.`);
//     }

//     static removeProduct(bool){
//         if(bool){
//             Product.nrProducts--;
//             console.log("A product was removed");
//         }
//         else{
//             console.log("Nothing happend");
            
//         }
//     }

//     displayProduct(){
//         console.log(`Product : ${this.name}`);
//         console.log(`Price : ${this.price}\n`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;


// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.55);

// product1.displayProduct();
// product2.displayProduct();

// const total = product1.calculateTotal(salesTax).toPrecision(5);

// console.log(`The product ${product1.name} has a total price of ${total}`);
// Product.removeProduct(true);
// console.log(Product.nrProducts);
// Product.removeProduct(false);
// ///////////////////////////////////////////////////////////

class Rectengle{

    #width;             // # makes the component private
    #height;

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0 && typeof(newWidth) === 'number'){
            this.#width = newWidth;     // underscore is for the developers to know that this is a private value
        }
        else{
            console.log("Width must be a positive number");
            
        }
    }

    set height(newHeight){
        if(newHeight > 0 && typeof(newHeight) === 'number'){
            this.#height = newHeight;     
        }
        else{
            console.log("Height must be a positive number");
            
        }
    }

    get width(){
        return this.#width;
    }

    get height(){
        return this.#height;
    }

    get area(){
        return this.#height * this.#width;
    }

    
}

const rectengle1 = new Rectengle(-1000, "pizza")
const rectangle2 = new Rectengle(2,3);

console.log(rectengle1.height, rectengle1.width);  // here are used getters not components
console.log(rectengle1.area);

console.log(rectangle2.width, rectangle2.height);  // the components are private _width and _height
console.log(rectangle2.area);



