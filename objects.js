const cup = {
    color: "red",
    shape : "circular",
    weight : "50 grams",
    size : "medium",
    description : {
        drinkType : "tea",
        temperature: "hot"
    },
    drink: function(){
        console.log("use me to drink")
        console.log(`The main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinkType}`)
    }
    // drink:()=>{
    //     console.log("use me to drink")
    //     console.log(`The main purpose of this cup is to drink ${cup.description.temperature} ${cup.description.drinkType}`)
    // }
};

// console.log(cup["description"]["drinkType"]);
console.log({colour: cup.color});
console.log("size", cup["size"]);
console.log("temperature", cup.description.temperature);


// create a new property
cup.material = 'ceramic';
console.log({cup});
cup.color = 'green';
console.log({cup});
// you create a property outside the object you have created it won't be part of the main blueprint the initial object you created.

//deleting a property
delete cup.material;
console.log({cup});

//object methods/functions 
cup.drink();  // you dont need to consle it because its a function.

// this method is used as a global input for manipulating JS and HTML but when we call it inside a an object we have created its used relates to the current scope which is the object defined.
const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log({values})

Object.keys(cup).forEach( item => {
    console.log({key:item,values:cup[item]});   ///here the item is a key and then cup[item] is similar to cup.item
});