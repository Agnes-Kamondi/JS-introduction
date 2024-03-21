let fruits = ["Mango","Banana","Orange"];// can hold data of any type

let arr = new Array(20,30);
//u can use [] 0r new Array(), new is a keyword we use to create objects
console.log({fruits});
console.log({arr});
//arrays are mutable in Js
console.log('fruit',fruits[1]);// to get the value on a specific index

fruits[2] = "Kiwi";// this replaces the value "Orange" with "Kiwi"
console.log({fruits})
console.log(fruits.length)//the last index of array = array.length-1 or array.slice(-1)
//here's how you find the last index of our above array.
console.log('hey',fruits.slice(-1));
console.log('last item',fruits[fruits.length - 1]);

let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});
//slice has start and end, when u use something like(0,4) it will give from index 0 to index 3 and leave out index4 but when u say(3) it will print from 
//index 3 to the end of the array

let addEnd = fruits.push('Pawpaw'); // used to add elements at the end of an array
console.log({fruits});

let addStart = fruits.unshift('pineapple');//used to add elements at the start of an array
console.log({fruits});

let removeEnd = fruits.pop();// remove elements at the end of an array
console.log({fruits});

let removeStart = fruits.shift(); // remove elements at the start of an array
console.log({fruits});

//given an array of numbers ,find the sum of all items in the array
let items = [20,30,40,50,60];
  
let add = items.reduce((acc,curr)=> acc + curr); //this function is used to find the sum of everything, accumulator works like acc+=curr
//here the function accumulator uses current value as the call back function.Everytime u use a function u use () and not [] 0r {}
console.log({add});

let multiply = items.map(item => item *2 ); //is a method that will go through an array manipulates it and returns another array.
console.log({multiply});

let square = items.map(item => item*item);
console.log((square));

let square2 = [];
items.forEach(item =>{
    const multiply = item*item;
    console.log({multiply});
    square2.push(multiply);
});
console.log({square2});
//This method brings the result of squared items as an array!