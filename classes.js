//Class
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

// greet(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
// }
// }

// const adam = new Person ("Adam", 30);
// console.log({adam});
// adam.greet();

//Inheritance
// class Student extends Person {
//     constructor(name,age,school){
//         super(name,age);
//         this.school = school;
//     }
//     profession(){
//         console.log(`I am a student in ${this.school}`)
//     }
// };

// const student = new Student("Agnes",21,"Akirachix");
// console.log({student});
// student.profession();
// student.greet();


// class Recipes{
//      constructor(){
//         this.listOfRecipes = []
//      }
//      addRecipes(name,ingredients,steps){
//         let id = this.listOfRecipes.length + 1
//         let newRecipe = {name : name, id : ID, ingredients: ingredients, steps: steps}
//         this.listOfRecipes.push(newRecipe)
//      }
//      searchRecipe(name){
//         const recipe = this.listOfRecipes.filter( recipe => recipe.name.toLowercase().includes(name.toLowercase()))
//      }
// }



  
// class Contact {
//     constructor(name, phoneNumber) {
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//     }
// }

// class AddressBook {
//     constructor() {
//         this.contacts = [];
//     }

//     addContact(contac) {
//         let id = this.contacts.length + 1
//         let contact = {name : name , id: ID, phoneNumber: phoneNumber}
//         this.contacts.push(contact);
//         console.log("Contact added successfully.");
//     }

//     removeContact(name) {
//         const index = this.contacts.filter(contact => contact.name === name);
//         if (index !== -1) {
//             this.contacts.splice(index, 1); //splice() is a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index. 
            //It is also an effective tool for adding items to the end of an array. Array. prototype.
//             console.log("Contact removed successfully.");
//         } else {
//             console.log("Contact not found.");
//         }
//     }

//     modifyContact(name, newPhoneNumber) {
//         const contact = this.contacts.filter(contact => contact.name === name);
//         if (contact) {
//             contact.phoneNumber = newPhoneNumber;
//             console.log("Contact modified successfully.");
//         } else {
//             console.log("Contact not found.");
//         }
//     }
// }

class Workout{
    constructor(){
        this.listOfWorkout = []
    }
    addnewWorkout(type,caloriesBurned,minutes){
        let id = this.listOfWorkout.length + 1
        let newWorkout = {type:type,caloriesBurned:caloriesBurned,minutes:minutes,id:id}
        this.listOfWorkout.push(newWorkout)
        return "Successfully added new Workout"
    }
    getAllWorkouts(){
        return this.listOfWorkout
    }
    retrieveWorkout(id){
        let workout = this.listOfWorkout.filter(workout => workout.id ===id)
        return workout
    }
    removeWorkout(index){
        // const workout = this.listOfWorkout.filter(workout => workout.id === id)
        // const index = this.listOfWorkout.indexOf(workout)
        if(index !== -1){
            this.listOfWorkout.splice(index,1) //here you can use .remove instead
            return "Successfully removed"
        }
          else{
            return "The identifier does not exist"
          } 


        // const workoutRemoved=this.listOfWorkout.indexOf(id);
        // if(workoutRemoved!==-1){
        //     this.listOfWorkout.splice(workoutRemoved,1)
        //     return "Successfully removed"
        // }
        // else{
        //     return "The identifier does not exist"
        // }

    }
    getTotalCalories(){
       let totalCalories = 0
       this.listOfWorkout.forEach(workout => {
        totalCalories += workout.caloriesBurned
       })
       return totalCalories
    }
}

const workout = new Workout ();
workout.addnewWorkout("Running",200, 30)
workout.addnewWorkout("Walking",100,50)


console.log(workout.getAllWorkouts())

console.log(workout.getTotalCalories());

console.log(workout.retrieveWorkout(1))

console.log(workout.removeWorkout(0))

console.log(workout.getAllWorkouts())
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        



// let list = [ wen, tue, fri ,sat , men, woman]
// list.pop()
// console.log(list)


  



//const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
//     { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
//     { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//   ];
  
  
//   Create a function getBooksByAuthor that takes an author's name as an argument and returns an array of all books by that author.
//   Create a function addNewBook that takes a book object as an argument and adds it to the library, ensuring that 
//the new book has all required properties (title, author, publicationYear, and isAvailable).
//   Create a function checkoutBook that takes a book title as an argument and changes the book's isAvailable 
//property to false. If the book is not found in the library, the function should return a message indicating that the book is not available.
//   Create a function returnBook that takes a book title as an argument and changes the book's isAvailable property to true. If the book is 
//not found in the library, the function should return a message indicating that the book does not belong to the library.
 

//   Write a JavaScript program that performs the following tasks:
//   Create a function called getAvailableBooks that returns an array of all available books.
// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
//     { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
//     { title: 'The Odyssey', author: 'Homer', publicationYear: 1800, isAvailable: true }
//   ]
// function getAvailableBooks(books){
//    const a = books.filter(book => book.isAvailable === true )
//    console.log(a)
   
// }
// getAvailableBooks(books)


//   Create a function getBooksByAuthor that takes an author's name as an argument and returns an array of all books by that author.
// let name ="Charles Dickens"
// function getBooksByAuthor(name){
//     const authorBooks = books.filter(book => book.author === name)
//     return authorBooks
// }
// getBooksByAuthor(name)

//   Create a function addNewBook that takes a book object as an argument and adds it to the library, ensuring that 
//the new book has all required properties (title, author, publicationYear, and isAvailable).
// function addNewBook(book) {
//     if (!book.title || !book.author || !book.publicationYear || book.isAvailable === undefined) {
//     console.log("Error: The book object must contain title, author, publicationYear, and isAvailable properties.");
//     return ("Error: The book object must contain title, author, publicationYear, and isAvailable properties.");;
//     }
//     books.push(book);
//    }
//    addNewBook({title:"Racheal", author:" Racheal", publicationYear:3765643, isAvailable:true})
//    console.log(books)

//   Create a function checkoutBook that takes a book title as an argument and changes the book's isAvailable 
//property to false. If the book is not found in the library, the function should return a message indicating that the book is not available.
// let title = "Great Expectations"
// function checkoutBook(title){
//     books.filter(book => {
//         if(book.title.toLowerCase()=== title.toLowerCase()){
//             console.log("Book not Available")
            
//         }
//         else{
//             book.isAvailable = false
//         }
//     })
//     return books
// } 
// checkoutBook(title)
//   Create a function returnBook that takes a book title as an argument and changes the book's isAvailable property to true. If the book is 
//not found in the library, the function should return a message indicating that the book does not belong to the library.

// title = "The Catcher in the Rye"
// function returnBook(title){
//     books.filter( book =>{
//         if(book.title.toLowerCase() !== title.toLowerCase()){
//             console.log("The book is not available")
//         }
//         else{
//             book.isAvailable = true
//         }
//     })
//     return books
// }
// returnBook(title)







