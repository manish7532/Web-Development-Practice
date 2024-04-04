// let age = 25;
// let result = age > 18 ? "adult" : "nut adult";
// console.log(result);

// let num = prompt("Enter a number: ");
// if(num % 5 === 0) {
//     alert(`${num} is divisible by 5`);
// }
// else {
//     alert(`${num} is not divisible by 5`);
// }


// let marks = prompt("Enter students percentage between 0 to 100");
// if(marks <= 0 || marks > 101 ) {
//     alert("invalid input");
// }
// else if(marks>=80 && marks<=100){
//     alert("ur garde is A");
// }
// else if(marks>=60 && marks<=79){
//     alert("ur garde is B");
// }
// else if(marks>=40 && marks<=59){
//     alert("ur garde is C");
// }
// else{
//     alert("u r Fail!!! \nStudy hard ");
// }


// for-of loop  used for iterating over arrays or strings
// let str = prompt("enter a string");
// for(let i of str){
//     console.log(i);
// }


// for in loop used to iterarte objects. it returns key & we can get value by key
// let emp = {
//     eName : "MAnish",
//     eAge  : 23,
//     eEmail: "manish@mail.com"
// };
// for(let key in emp){
//     console.log(`${key} : ${emp[key]}`)
// }


// for(let i = 0; i<=100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     } 
// }

// Q. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "shradhakhapra" , username should be "@shradhakhapra13"
// let str = prompt("Enter your name:");
// let x = str.length;
// alert(`@${str}${x}`);


// Q. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//     Find the average marks of the entire class.
// let arr = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(i of arr){
//     sum +=i;
// }
// avg = sum /(arr.length)
// console.log(avg);


// Q. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//     All items have an offer of 10% OFF on them. Change the array to store final price after
//     applying offer.

// let prices = [250, 645, 300, 900, 50];
// let discount, idx = 0; 

// for(let i of prices){
//    console.log(`value of item ${idx} : ${i}`);
//    idx++;
// }

// for(let j = 0; j<prices.length; j++){
//     discount = prices[j]*0.10;
//     prices[j] -= discount;
// }

// console.log(`New prices Array : [${prices}]`);



// Qs. Create an array to store companies -> ["Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"]
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"];
// console.log("Original array : ",companies)
// companies.shift()
// console.log(`After removing 1st company`, companies);
// companies.splice(1,1,"Ola");
// console.log(`after replacing uber`, companies);
// companies.push("Amazon");
// console.log(`after adding amazon at end`, companies);



// normal function
// function sum(a,b){
//     console.log(a + b);
// }
// arrow function - we can store this fns in varibales & then we can use that variable to call arrow fn just like normal fn.
// const arrowSum =(a,b)=>{
//     console.log(a + b);  
// }   
//  both fns execution 
// sum(2,3);
// arrowSum(5,5)



// Qs. Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.
// function countVowels(str){
//     let count = 0;
//     str = str.toLowerCase();
//     for(let i = 0; i<str.length;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("manishJoshi")


// perform same task as above with arrow fn
// let countVowels=(str)=>{
//     let count = 0;
//     str = str.toLowerCase();
//     for(let i of str){                          //with for-of loop
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){  
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("manishJoshi");


// Qs. For a given array of numbers, print the square of each value using the forEach loop.
// let arr = [2, 4, 6, 8];
// arr.forEach(squares);
// arr.forEach(display);
// function squares(element, index, arr) {
//     arr[index] = element ** 2;
// }
// function display(element){
//     console.log(element);
// }

// OR

// arr.forEach((arr)=>{
//     console.log(arr*arr);
// })


// middle element of array
// let n = arr.length;
// if(n%2 !== 0){
//     console.log(arr[(n/2) | 0]);  //  or console.log(arr[Math.floor(n / 2)]);
// }
// else{
//     console.log(arr[(n/2)-1]);
// }


// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90 or +.

// let marks = [90,85,56,95,99,72,97,89,67];
// const arr_90Plus = marks.filter((marks)=>{
//     return marks>=90;
// })
// console.log(arr_90Plus);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

// let n = prompt("Enter a size of array");
// let arr = [];
// for(let i = 0; i < n; i++){
//     arr[i] = i+1;
// }
// console.log(`Array = ${arr}`);

// let sum = arr.reduce((res,cur)=>{       // Use the reduce method to calculate sum of all numbers in the array.
//     return res+cur;
// });
// console.log(`Sum of given arr = ${sum}`);

// let product = arr.reduce((res,cur)=>{   // Use the reduce method to calculate product of all numbers in the array.
//     return res*cur;
// });
// console.log(`Product of all array elemnts = ${product}`);



// document.getElementByld("myld")                     // Selecting with id
// document.getElementsByClassName("myClass")          // Selecting with class
// document.getElementsByTagName("p")                   // Selecting with tag
//document.querySelector(" #myId || .myClass || tag")       // returns first element
// document.querySelectorAlI(" #myId || .myClass || tag")   // returns a NodeList

// Properties
// • tagName : returns tag for element nodes
// • innerText : returns the text content of the element and all its children
// • innerHTML : returns the plain text or HTML contents in the element
// • textContent : returns textual content even for hidden elements


// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

// let myh1 = document.querySelector("h2");
// myh1.textContent = myh1.textContent +" from Apna College Students."  //    ||    myh1.innerText = myh1.innerText +" from Apna College Students."


// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
// let divs = document.querySelectorAll(".box"); 
// divs[0].textContent = "HElloo thats div 1";
// divs[1].innerText = "HElloo thats div 2"
// divs[2].textContent = "HElloo thats div 3"

// OR  we can use for - of loop
// let i = 1;
// for(div of divs){
//     div.innerText = `new div no ${i}`;
//     i++;
// }


// Attributes
// • getAttribute( attr)            //to get the attribute value
// • setAttribute( attr, value )    //to set the attribute val th
// Style
// • node.style

// Insert Elements
// • node.append( el )     //adds at the end of node (inside)
// • node.prepend( el )    //adds at the start of node (inside)
// • node.before( el )     //adds before the node (outside)
// • node.after( el )      //adds after the node (outside)
//Delete elements 
//node.remove()            // removes node

// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag using javascript.

// let btn = document.createElement("button");
// btn.textContent = "Click Me";
// btn.style.backgroundColor = "red";
// btn.style.color = "White";
// document.querySelector("body").prepend(btn);

// Qs. Create a tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
// let body = document.querySelector("body");
// let theme = document.querySelector("#theme");
// let curTheme = "dark";
// theme.addEventListener("click",() => {
//     if(curTheme === "dark"){
//         curTheme = "light";
//         body.style.backgroundColor = "white";
//     }
//     else{
//         curTheme = "dark";
//         body.style.backgroundColor = "rgb(10, 25, 38)";
//     }
//     console.log(curTheme);
// });

// we can also do css class switching instead of applying only background color    (Theme logic)
// let body = document.querySelector("body");
// let theme = document.querySelector("#theme");
// let curTheme = "dark";
// theme.addEventListener("click",() => {
//     if(curTheme === "dark"){
//         curTheme = "light";
//         body.classList.remove("dark")
//         body.classList.add("white")
//         theme.classList.remove("btnWhite")
//         theme.classList.add("btnDark")
//     }
//     else{
//         curTheme = "dark";
//         body.classList.remove("white")
//         body.classList.add("dark")
//         theme.classList.remove("btnDark")
//         theme.classList.add("btnWhite")
//     }
//     console.log(curTheme);
// });


// css
// .dark {
//     background-color: rgb(10, 25, 38);
//     color: white;

// }
// .white{
//     background-color:rgb(168, 169, 173);
//     color: black;
// }

// .btnDark {
//     margin: 25px;
//     height: 50px;
//     width: 100px;
//     background-color: rgb(8, 8, 8);
//     color: rgb(255, 250, 250);
//     border-radius: 10%;
//     font-family: Verdana;

// }
// .btnWhite{
//     margin: 25px;
//     height: 50px;
//     width: 100px;
//     background-color: rgb(94, 88, 88);
//     color: rgb(0, 0, 0);
//     border-radius: 10%;
//     font-family: Verdana;
// }





// randome dice number
// var n = Math.floor(Math.random()*6)+1;
// console.log(n);


// random number love game
// var his = prompt("Enter partner 1 name");
// var her = prompt("Enter partner 2 name");

// var n = Math.floor(Math.random()*100)+1;

// alert(`Your love match is ${n}%`);

// BMI calculator

// function bmiCalculator (weight, height) {
//     let bmi=(weight/(height*height));
//     let interpretation;

//     if(bmi<18.5){
//         interpretation = `Your BMI is ${bmi}, so you are underweight.`;
//     }
//     else if(bmi>=18.5 && bmi<=24.9){
//         interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
//     }
//     else{
//         interpretation = `Your BMI is ${bmi}, so you are overweight.`;
//     }

//     return interpretation;
// }


// if divisible by 3 push Fizz, if divisible by 5 push Buzz & if divisible by both push FizzBuzz

// var output = [];
// var arrSize=prompt("Enter Size of Array");
// function Fizfuzz(){
//         for(let i = 0 ; i<arrSize; i++){
//             if(i%3 === 0 && i%5 !== 0){
//                 output.push("Fizz");
//             }
//             else if(i%3 !== 0 && i%5 ===0){
//                 output.push("Buzz");
//             }
//             else if(i%3 === 0 && i%5 ===0){
//                 output.push("FizzBuzz");
//             }
//             else{
//                 output.push(i);
//             }

//         }
//         console.log(output)
// }

// Fizfuzz();


//  99 bottles song  lyrics print with while loop

// function printLyrics() {
//     var n = 99;
//     var word = "Bottles"
//     while (n > 0) {
//         if (n == 1) {
//             word = "Bottle";
//         }
//         console.log(n + " " + word + " of beer on the wall, " + n + " " + word + " of beer.")
//         n--;
//         if (n == 0) {
//             console.log(" Take one down and Pass it around, No more Bottles of beer on the wall.");
//          }
//         else {
//             console.log(" Take one down and Pass it around, " + (n) + " " + word + " of beer on the wall.");
//         }
//     }
//     if (n == 0) {
//         console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall")
//     }
// }

// printLyrics();

// document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.innerHTML=`Manish`

// document.querySelectorAll('.list')[2].innerHTML=`manish`;




//closures in js & some SetTimeout()
// function createCounter() {
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(`count increased to ${count}`);
//     }
//     return {increment}
// }

// const counter = createCounter();
// setTimeout(()=>{
//     counter.increment();
// },1000)
// setTimeout(()=>{
//     counter.increment();
// },2000)
// setTimeout(()=>{
//     counter.increment();
// },3000)


//setIntervals()
// let count = 0;
// let x = setInterval(()=>{
//     console.log("I am vegenence.");
//     count++;
//     if(count==5){
//         clearInterval(x);
//         }
// },1000);

