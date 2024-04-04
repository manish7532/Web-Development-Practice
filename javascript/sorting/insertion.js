function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1; 
        while (j >= 0 && current < arr[j]) {        
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    printArray(arr);
}

function printArray(arr) {
    document.write("Sorted Array is : ");
    for (let i = 0; i < arr.length; i++)
        document.write(`${arr[i]}&nbsp`);
}

let arr = [];
let arrSize = parseInt(prompt(`Enter Size of Array.`));
let x = 0;
while (x < arrSize) {
    arr.push(parseInt(prompt(`Enter ${x + 1} element of array`)));
    x++;
}

insertionSort(arr);

