function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if(dogwalked){
                resolve("U Walked with Dog 🐶")
            }
            else{
                reject("U didn't walked with Dog 😡")
            }
        }, 2500)
    })
}


function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clean = true;
            if(clean){
            resolve("U cleaned the kithcen 🧹")
        }
        else{
            reject("U didn't cleaned the kitchen 😡")
        }
        }, 1000)
    })
}


function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const throwTrash = false;
            if(throwTrash){
                resolve("U thrown the trash. ♻")
            }
            else{
                reject("U didn't thrown the trash 😡")
            }
        }, 2000)
    })
}

// method chaining
walkDog().then((value) => { console.log(value); return cleanKitchen() })
    .then((value) => { console.log(value); return takeOutTrash() })
    .then((value) => {
        console.log(value);
        setTimeout(() => {
            console.log("You finished all work.")
        }, 2000)
    })
    .catch((error)=>{
        console.error(error);
    })
