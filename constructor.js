function Person(name, age){
    this.name = name;
    this.age = age ;
    this.greet = function(){
       console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
};
}

const adam = new Person("Adam",30);
console.log({adam});

const eve = new Person ("Eve",20);
console.log({eve});
eve.children = ["Abel","Cain","Seth"]; //here we have overrode the function Person and give eve the attribute children
console.log({eve});
console.log({adam});

Person.prototype.nationality = "Kenyan"  //giving the person an attribute that is not in its attributes 
console.log("adam")
console.log('adam nationality', adam.nationality);

eve.nationality = "Ugandan" // we have given eve a new function but the onw in the prototype does exist.
console.log({eve});
console.log("adam- nationalty ", adam.nationality)
console.log("eve-nationality",eve.nationality)

adam.work = function(){
    console.log("I am a farmer")
}
adam.work();
adam.greet();
eve.greet();


function Car (name,Nplate){
    this.name = name
    this.Nplate = Nplate
    this.age = function(){
        console.log(`This is ${name}, number plate this ${Nplate} and its been ${age} since it was bought`)
    }
}

const audi = new Car("Audi","AA342E")
console.log(audi)

Car.prototype.color = "Black"
console.log({audi})

audi.speed = function(){
    console.log("100km/h")}
    console.log([speed])


    