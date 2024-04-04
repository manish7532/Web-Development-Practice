function bubbleSort(arr) {
    // timeComplexity = O(n^2)
    //  bubbleSort
    for (let i = 0; i < arrSize - 1; i++) {
        for (let j = 0; j < arrSize - i - 1; j++) {
            //swapping both if element after element is smaller
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    printArray(arr);
}

function printArray(arr){
    document.write("Sorted Array is : ");
    for(let i =0; i<arr.length;i++)
    document.write(`${arr[i]}&nbsp`);
}

let arr = [];
let arrSize = parseInt(prompt(`Enter Size of Array.`));
let x = 0;
while (x < arrSize) {
    arr.push(parseInt(prompt(`Enter ${x + 1} element of array`)));
    x++;
}

bubbleSort(arr);

