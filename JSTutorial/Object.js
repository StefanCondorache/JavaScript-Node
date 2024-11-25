
const person = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true,

    toString : function(){
        let string = this.firstName + " " +     // there is not difference in using this and person
                    this.lastName + " " +       // in an object
                    person.age + " " +          // it's better to use this if u got more objects with the same structure
                    person.isEmployed;          // this doesn't work with arrowFunctions
        
        return string;
    }

    
} 


console.log(person.toString());
console.log(person);



function Car(make, model, year, color){  // constructors for objects
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color;

    this.displayCarModel = function(){
        console.log(this.model);
    }

    this.calculatePrice = function(){
        let result = (((this.year / 2) + 300.67)**3)/3.05*(this.year/(this.year*37.89));
        return result.toPrecision(11);
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Dodge", "Charger", 2026, "Silver")

console.log(car1);
console.log(car1.calculatePrice());
 
