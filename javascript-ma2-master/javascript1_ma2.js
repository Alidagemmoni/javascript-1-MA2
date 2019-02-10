//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Phone() {
    this.mobile = "Samsung"
}

Phone.prototype.model = function () {
    console.log("This device is a " + this.mobile + " telephone");
};

var android = new Phone();
android.model();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var myNumbers = [1,2,3,4,5,6,7,8,9,10]; 

console.log(myNumbers.slice(4));

//3. Delete the last number in the array that you created above.
myNumbers.pop();
console.log(myNumbers);
      
//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var footballClubs = ["ManchesterU", "Viking", "Liverpool", "Tottenham"];
var cars = ["Lexus", "Mercedes", "Fiat", "Golf"];
console.log(footballClubs);

document.getElementById("footballClubs").addEventListener("click", function () {
    footballClubs.splice(0, 4)
    console.log(cars);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
 var friends = [
     {name: "Frodo", friend: "Sam"},
     {name: "Aragon", friend: "Gandalf"},
     {name: "Peregrin", friend: "Meriadoc"}
 ];

var friendsWith = friends.filter(function (name) {
    return (name.friend === "Sam");
})

console.log(friendsWith);

//7. Create a simple function that logs the date.
var date = new Date();
console.log(date);