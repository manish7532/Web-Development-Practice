function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + high / 2);

        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return -1;
}

let i = 0;
let arr = [];
let arrSize = parseInt(prompt(`Enter Size of Array`));
while (i < arrSize) {
    const data = prompt(`Enter ${i+1} element of array `);
    arr.push(data);
    i++;
}
const target = parseInt(prompt(`Enter target element to search`));
arr.sort();
const resultIndex = binarySearch(arr, target);

if(resultIndex == -1){
    document.write(`Target Element ${target} not found`);
}
else{
    document.write(`Target element ${target} found at index ${resultIndex}`)
}
