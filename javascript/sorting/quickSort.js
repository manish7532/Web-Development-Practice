function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length/2)];
    const less = [];
    const equal = [];
    const greater = [];

    for(let i of arr){
        if(i<pivot){
            less.push(i);
        }
        else if(i == pivot){
            equal.push(i);
        }
        else{
            greater.push(i);
        }
    }
    return [quickSort(less),equal,quickSort(greater)];
}


let arr = [];
let arrSize = parseInt(prompt(`Enter Size of Array.`));
let i = 0;
while (i < arrSize) {
    arr.push(parseInt(prompt(`Enter ${i + 1} element of array`)));
    i++;
}

let result = quickSort(arr);
document.write(`Original Array :  ${arr} <br>`);
document.write("Sorted Array : ",result);
