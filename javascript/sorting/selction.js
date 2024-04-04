function selectionSort(arr){
    // time Complexity O(n^2)
    //Selction Sort
    for(let i=0;i<arr.length-1;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j])
            min = j;
        }
        //swaps small element a start 
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    printArray(arr);
}

function printArray(arr){
    document.write(`Sorted Array is :`);
    for(let i=0;i<arr.length;i++){
        document.write(arr[i]," ");
    }
}

let arr=[];
let arrSize = parseInt(prompt(`Enter size of array`));
for(let i= 0; i<arrSize; i++){
    arr.push(parseInt(prompt(`Enter ${i+1} element of array.`)));
}

selectionSort(arr);