
// Do these chores in order

// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog")
            }
            
        }, 1500)
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

        const kitchenCleaned = false;

        if(kitchenCleaned){
            resolve("You clean the kitchen");
        }
        else{
            reject("You didn't clean the kitchen");
        }

        }, 2500)
    
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You didn't take out the trash")
            }

        }, 500)
    
    })
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => console.log(value))
         .catch(error => console.log(error));