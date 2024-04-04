class linearSearch{
    linearSearch(arr, size , target){
        let i = 0;
        while(i<size){
            if(arr[i]==target){
                return i;
            }
            i++;
        }
        return -1;
    }
}

let ls = new linearSearch();

var n = parseInt(prompt("Enter size of Array."));
let i = 0;
let arr = [];

while(i<n){
    let x = parseInt(prompt(`Enter ${i+1} array element.`))
    arr.push(x);
    i++; 
}
let target = parseInt(prompt("Enter elemnt to search")); 

let res = ls.linearSearch(arr, n ,target);
if(res==-1){
    document.write("Not Found");
}
else{
document.write(`${target} found in given array at index ${res} `);
}