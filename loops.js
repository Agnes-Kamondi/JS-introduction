const multiply = (numbers) => {
    let newArray = [];

    for (let i = 0; i<numbers.length; i++){
         const multiplyBytwo = numbers[i]* 2;
        newArray.push(multiplyBytwo)
    }
    return newArray;
};
console.log(multiply([2,3,4,6,7]))


const totalSum = (arrayNums) => {
    let sum = 0 ;
    for(let num of arrayNums){
        sum += num
    }
    return sum;
}
console.log(totalSum([3,4,5,6,7,8]));

const leg = true;
const kickBall = (leg) => {
    while(leg){
        console.log("Kick the ball");
        break;
    }
    
}
kickBall(leg)

const checkLeg = (leg) => {
    do{
        console.log("You have a leg; kick the ball");
    }
    while(leg) 
}
checkLeg(false); /// if you write checkLeg(leg) it will be an infinite looop u can also use a break but after writing the console.log function do

 const greeting = (dayOfWeek) => {
    switch(dayOfWeek){
        case "Monday": 
        console.log("Hello Monday")
        break;
        case "Tuesday": 
        console.log("Hello Tuesday")
        break;
        case "Wednesday": 
        console.log("Hello Wednesday")
        break;
        case "Thursday": 
        console.log("Hello Thursday")
        break;
        case "Friday": 
        console.log("Hello Friday")
        break;
        case "Saturday": 
        console.log("Hello Saturday")
        break;
        case "Sunday": 
        console.log("Hello Sunday")
        break; 
        default:
            console.log("Invalid day of the week")
    }
 }
 greeting("Wednesday")   // this can be used instead of if and if else

