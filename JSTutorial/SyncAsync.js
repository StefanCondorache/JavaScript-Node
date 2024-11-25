
// function func1(callback){
    
//     setTimeout(() => {
//                         console.log("task 0"),
//                         callback()
//                     }
//                         , 3000);

// }

// function func2(){

//     console.log("task 1");
//     console.log("task 2");
//     console.log("task 3");
    
// }

// func1(func2);
/////////////////////////////////////////////////////////////

// Do these chores in order

// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

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

        const kitchenCleaned = true;

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


async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }
    catch(error){
        console.error(error);
    }
    

}

doChores();