const personAge = (age) => {
    if (age >= 18){
        console.log("You are an adult");
    }
    else if(age >13 && age <18)
    console.log("You are a teenager");
    else{
        console.log("You are a child");
    }
    
}
personAge(10);

function checkAge(age){
    if(age>=18){
        console.log("You are an adult")
    }
    else if(age > 13 && age < 18){
        console.log("You are a teenager")
    }
    else{
        console.log("You are a child")
    }
}
checkAge(10)

arrNames = ["Mwanasha","Sham","Martha","Glo","Meghan"]
function checkString(arrNames){
    return arrNames.filter(name => name.length> 5) //filter returns an array
}
console.log(checkString(arrNames))

