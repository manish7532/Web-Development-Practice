    function task1(callback) {
        setTimeout(() => {
            console.log(`Task 1 completed`);
            callback()
        }, 2000)
    }
    function task2(callback) {
        setTimeout(() => {
            console.log(`Task 2 completed`);
            callback()
        }, 1000)
    }
    function task3(callback) {
        setTimeout(() => {
            console.log(`Task 3 completed`);
            callback()
        }, 3000)
    }
    function task4(callback) {
        setTimeout(() => {
            console.log(`Task 4 completed`);
            callback()
        }, 1500)
    }


    //callback Hell
    task1(() => {
        task2(() => {
            task3(() => {
                task4(() => {
                    setTimeout(() => {
                        console.log("All task completed.");
                    }, 2000)
                });
            })
        })
    })