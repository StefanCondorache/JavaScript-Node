
const person = {
    fullName: "Ebati Loh",
    age : 30,
    isStudent : true,
    hobbies : ["karate", "jellyFishing", "cooking"],
    address : {
        street : "124 Conch St.",
        city : "Ahueti",
        country : "NihuiaSebe"
    }
}

console.log(person);
/////////////////////////////

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("SpongeBob", 30, 
    "124, Conch St.", "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, 
    "128, Conch St.", "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 45, 
    "126, Conch St.", "Bikini Bottom", "Int. Waters");

    
console.log("\n",person1.address);


