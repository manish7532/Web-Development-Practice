function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if (dogwalked) {
                resolve("U Walked with Dog 🐶")
            }
            else {
                reject("U didn't walked with Dog 😡")
            }
        }, 2500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clean = true;
            if (clean) {
                resolve("U cleaned the kithcen 🧹")
            }
            else {
                reject("U didn't cleaned the kitchen 😡")
            }
        }, 1000)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const throwTrash = true;
            if (throwTrash) {
                resolve("U thrown the trash. ♻")
            }
            else {
                reject("U didn't thrown the trash 😡")
            }
        }, 2000)
    })
}


async function doWork() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenREs = await cleanKitchen();
        console.log(cleanKitchenREs);

        const takeOutTrashRes = await takeOutTrash();
        console.log(takeOutTrashRes);

        setTimeout(() => {
            console.log("You Finished all Work.🥂")
        }, 2000)
    }
    catch (error) {
        console.log(error)
    }
}

doWork();