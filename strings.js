let a = 'Hello';
let b = "World";
let c = `There`;
//  to assign a string u use template literral, double, single quotes.
// strings are objects because it has properties and characteristics they are primitive data because they are immutable

let length = a.length;
console.log({length});
//the function .length is used to find the number of characters in a string.
//console.log(a[2])

console.log("item",a[2]);
console.log('index',a.indexOf('e'));
//the strings item and index are used as ID's to the result.

//string concatenation
let greet = a + " "+  b ; // method1
console.log({greet});

let salamu = `${a} ${b}. I love code!`;//method2
console.log({salamu});

