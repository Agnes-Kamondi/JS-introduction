//names that 
arrNames = ["Mwanasha","Megan","Shalom","Glory","Martha","Sharon"]
function removeString(arrNames){
    const newArr = arrNames.filter(name => name.length > 5 )
    console.log(newArr)
}
removeString(arrNames)
//The filter method loops through an array and gives out a new array according to the condition provided

//find average
let students = [
    {name: "Agnes",class: "AnitaB", score: 50},
    {name: "Shalom",class: "AnitaB", score: 40},
    {name: "Kamondi",class:"AnitaB",score: 60}
]
function returnAverage(students){
    let newArr = []
    students.forEach(x =>{
        newArr.push(x.score)
    })
    let sum = newArr.reduce((a,b) => a+b)
    let average = sum / newArr.length
    console.log(average)
}
returnAverage(students)

//return reversed word
let name = "Agnes"
function reversedWord(name){
    let word = name.split("").reverse().join("")
    console.log(word)
    
    let words = " "
    let i = name.length - 1
    while(i >= 0){
        words+=name[i];i--;
    }
    console.log(words)
}
reversedWord(name)

let sentence = "I've got make it or make it "
function capitalizeSentence(sentence){
   let newSentence = " "
   sentence.split(" ").forEach(word =>{
    const capitalizedSentence = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    newSentence += capitalizedSentence + " ";
   });
   console.log(newSentence)
   return newSentence
}
capitalizeSentence(sentence)

arrSales = [1000, 2000, 3000, 2000, 1000, 2000, -1000]
function totalRevenue(arrSales){
    let positiveSales = []
    arrSales.forEach(sales =>{
        if (sales > 0){
            positiveSales.push(sales)
        }});
        const total = positiveSales.reduce((a,b) => a + b)
        console.log(total)
}
totalRevenue(arrSales)

let age = 10
function checkAge(age){
    if (age >= 18){
        console.log("You are old enough to drive")
    }
    else if(age < 18){
        console.log(`Wait for ${18 - age} years so that you can start driving`)
    }
}
checkAge(age)

let car = {
    color : "Yellow",
    model : "audi",
    make : "audiCX"
}
function findValues(car){
    console.log("color", car.color)
    console.log("model",car.model)
    console.log("make",car.make)
}
findValues(car)

let book = [
    {title : "All of me", author : "Mark", page : 400},
    {title: "To all the Boys I have loved before", author: "Rose", page: 300},
    {title: "Grit", author: "Agnes", page :250 }
]
function findShortestBook(book){
    let pages = []
    book.forEach(book =>{
       pages.push(book.page)
    })
   let shortBook = Math.min.apply(Math,pages)
   console.log(shortBook)
   book.forEach(book => {
    if(book.page === shortBook){
        console.log(book.title)
        return book.title
    }});
}
findShortestBook(book) 

let month = "April"
function checkSeason(month){
    const autumn = ["September","October","November"]
    const winter = ["December","January","February"]
    const spring = ["March","April","May"]
    const summer = ["June","July","August"]
    if(autumn.includes(month)){
        console.log(`The season is Autumn`)
    }
    else if(winter.includes(month)){
        console.log(`The season winter`)
    }
    else if(spring.includes(month)){
        console.log(`The season is Spring`)
    }
    else if (summer.includes(month)){
        console.log(`The season is Summer!!!`)
    }
}
checkSeason(month)

let person = {name : "Agnes", age: 21, occupation : "Computer Scientist"}
 function introduce(person){
    let introductionMessage = `This is ${person.name}, she is ${person.age} and she works as a ${person.occupation}`
    console.log(introductionMessage)
 }
 introduce(person)


// Design a class called "Product" with properties for name, price, quantity, and category. Implement a method that 
// calculates and returns the total cost of the products in a shopping cart.

class Product{
    constructor(){
        this.listOfProducts = []
    }
    addnewProducts(name,price,quantity,category){
        let newProduct = {name:name,price:price,quantity:quantity,category:category}
        this.listOfProducts.push(newProduct)
    }
    calculateTotalCost(){
        let total = 0
        this.listOfProducts.forEach(product =>{
            total+=(product.price*product.quantity)
        })
        return total
    }
    getAllProducts(){
        return this.listOfProducts
    }
}
const product = new Product()
product.addnewProducts("Microphone",3000,2,"Electronic")
product.addnewProducts("Wig",100000,2,"Beauty")
product.addnewProducts("Car",5000,4,"Machine")
product.addnewProducts("House",50000000000,1,"Necessity")

console.log(product.calculateTotalCost())
console.log(product.getAllProducts())

class UserAuthentication {
    constructor() {
        this.userAuthentication = [];
    }
    register(userName, password) {
        let alphaNumeric = /[a-z0-9]/;
        const credentials = { userName: userName, password: password };
        if (credentials.password.match(alphaNumeric)) {
            this. userAuthentication.push(credentials);
            console.log("Credentials added successfully.");
        } else if(!credentials.password.match(alphaNumeric)) {
            console.log("The password should include both numbers and letters.");
        }
    }
}
const userAuthenticationDetails = new UserAuthentication();

const userName = "John";
const password = "JohnOn123";
// const password = "john123"
userAuthenticationDetails.register(userName, password);

class AnkaraFabric {
    constructor(temperature, mood) {
        this.temperature = temperature;
        this.mood = mood;
    }

    predictDesignChange() {
        if (this.temperature > 25 && this.mood === "happy") {
            return "Vibrant floral pattern";
        } else if (this.temperature < 10 && this.mood === "calm") {
            return "Subtle geometric pattern";
        } else {
            return "Standard Ankara design";
        }
    }
}

// Example usage:
const fabric = new AnkaraFabric(30, "happy");
console.log("Predicted design change:", fabric.predictDesignChange());

