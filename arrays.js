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
console.log('hey',fruits.slice(-1)); //slice extracts a part of word from a specified index
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

let names = ["Dan","Agnes"]
console.log({names})
console.log("names :",names[0])
console.log(names.slice(0))
console.log(names[names.length-1])
console.log(names.length)
let addname = names.push(`Reign`)
console.log(names)
let addstart = names.unshift('Reigna')
console.log(names)
let remoName = names.shift()
console.log(names)
let reMO = names.pop()
console.log(names)




//given an array of numbers ,find the sum of all items in the array
let items = [20,30,40,50,60];
  
let add = items.reduce((acc,curr)=> acc + curr); //this function is used to find the sum of everything, accumulator works like acc+=curr
//here the function accumulator uses current value as the call back function.Everytime u use a function u use () and not [] 0r {}
console.log({add});

let multiply = items.map(item => item *2 ); //is a method that will go through an array manipulates it and returns another array.
console.log({multiply});

let square = items.map(item => item*item); //loops through an array but just returns a value
console.log((square));

let square2 = [];
items.forEach(item =>{
    const multiply = item*item;
    console.log({multiply});
    square2.push(multiply);
});
console.log({square2});
//This method brings the result of squared items as an array!

let numbers = [100,200,3000,4000,5000,4000,5000,2000]

let addition = numbers.reduce((a,b) => a + b) /// u can use any values as the acc and curr just as long a they follow each other in the alphabet
console.log(addition)

let multiplication = numbers.map (number => number * 2)//returns a new array
console.log(multiplication)

let squares = numbers.map (i => i * i)
console.log(squares)

let cube = []
numbers.forEach( v =>{
    let cubes = v*v*v
    console.log({cubes})
    cube.push(cubes);

}) //if you do not satisfy the condition for Each will return undifined else it iterates to give out each element
console.log({cube})


let b = [4,5,6,7,8,9,10]
let v = b.map(x => x*2)
console.log(v)

t=[]
v.forEach(item =>{
    const multiply = item * item
    console.log({multiply})
    t.push(multiply)
    console.log(t)
})

let nums = [10,20,30,50,60,70,80,90,100]
let addin = nums.reduce((a,b)=> a+b)
console.log(addin)


let items1 = ["wen","tue","mon","fri","sat"]
let index = items1.indexOf("mon")
items1.splice(index,2)
console.log(items1)

