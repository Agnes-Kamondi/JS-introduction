let a = 20;
let b =30;

let add = a+b;
console.log({add});

let subtract = a-b ;
console.log({subtract});

let division = a/b;
console.log({division});
 
let multiply = a * b;
console.log({multiply});

let c = '20';

let looselyEqualTo = a == c;
console.log({looselyEqualTo});
// check the values not the data types

let strictlyEqualTo = a ===c;
console.log({strictlyEqualTo});
//not only does the Strictlyequalto check for the value but also the data type.

let looselyNotEqualTo = a!= c;
console.log({looselyNotEqualTo});
//It's getting false because looselyNotEqualTo checks if either the value is the same. it does'nt care about the data types just the values.

let strictlyNotEqualTo = a!==c;
console.log({strictlyNotEqualTo});
//checks for the value and data type too.

// increment ++ increases by 1, decrement -- decreases by 1.
a+=5;
console.log({a});

//decrement
a--;
console.log({a});

//increment
a++;
console.log({a});

//Implicit coercion
let d = +c ;
console.log({c});
console.log({d});
// here the operator + has been used to change the data type of c to a number.

let e = c *1 ;
console.log({e});
// here the operator * has also been used to change the data type.. you can also wtite let d = Number(c)

//explicit  coercion
let f = Number(c);
console.log({f})
console.log(typeof{f})
