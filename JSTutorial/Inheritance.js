class Animal{               // Parent Class
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
        
    }
}

class Rabbit extends Animal{    // Child Class
    name = "Rabbit"
}
class Fish extends Animal{
    name = "fish"
}
class Hawk extends Animal{
    name = "hawk"
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
fish.eat();
hawk.sleep();