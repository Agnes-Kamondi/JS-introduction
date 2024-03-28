const num = 10;
function add(num1,num2){
    const sum = num1 +num2;
    console.log("num-in",num);
    console.log({console: sum});
    return{return : sum};
}
console.log(add(2,3));  //returning is really important because it stores data in memory
add(4,5);
// u can't console.log({console: sum})and get an output because sum is locally scoped it can only be logged inside the function
console.log("num-out",num);

const sum = 8;
console.log({sum});

// function expression

const subtract = function(num1,num2){
    console.log(num1-num2);
}
subtract(20,10);

//Arrow functions

const multiply = (num1,num2) => console.log(num1 * num2);
multiply(3,6);

//IIFE Immediately Invoked Functions Expression

(function(a){
    console.log('Hello',a)
})(20);

(function(){
    console.log("Phenomenal")
})();


const greet = function(){
    console.log("Hello There")
};
greet()
