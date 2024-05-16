"use strict";
// TypeScript Assignments
// Question#01
//Install Node.js, TypeScript and VS Code on your computer.
// Question#02
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be
// simple, such as, “Hello Eric, would you like to learn some Python today?”
const myName = "Arsalan";
console.log(`Hello ${myName}, would you like to learn some Python today?`);
// Question#03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.
let person_name = "arsalan raza azmi";
console.log(`Uppercase name: ${person_name.toUpperCase()}`); //Uppercase name: ARSALAN RAZA AZMI
console.log(`Lowercase name: ${person_name.toLowerCase()}`); //Lowercase name: arsalan raza azmi
let nameArr = person_name.split(" ");
for (let i = 0; i < nameArr.length; i++) {
    nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1);
}
const titleCase = nameArr.join(" ");
console.log(`Titlecase name: ${titleCase}`); //Titlecase name: Arsalan Raza Azmi
// Question#04
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "A person who never made a mistake never tried anything new.";
console.log(`Albert Einstein once said, "${quote}"`);
// Question#05
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
// Question#06
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
// around the name is displayed. Then print the name after striping the white spaces.
const nameWithWhitespace = "\t\n   Arsalan Raza Azmi   \t";
console.log(nameWithWhitespace); // Displays whitespace around the name
console.log(nameWithWhitespace.trim()); // Removes leading/trailing whitespace
// Question#07
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3); // Addition: 5 + 3 = 8
console.log(10 - 2); // Subtraction: 10 - 2 = 8
console.log(2 * 4); // Multiplication: 2 * 4 = 8
console.log(16 / 2); // Division: 16 / 2 = 8
// Question#08
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(7 + 1);
console.log(6 + 2);
console.log(5 + 3);
console.log(4 + 4);
// Question#09
// Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 8;
let myMessage = "My favorite number is " + favoriteNumber;
console.log(myMessage);
// Question#10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.
let my_name = "Arsalan";
let current_date = new Date();
console.log(my_name + " " + current_date.toLocaleString());
// Above program is concatinating my name and current time
// Question#11
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friend_list = ["Arsalan", "Saad", "Fahad", "Inam"];
friend_list.map((name) => {
    console.log(name);
});
// Question#12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized 
// with the person’s name.
let greeting = "Hi";
friend_list.map((name) => {
    console.log(`${greeting}, ${name}!`);
});
// Question#13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
// stores several examples. Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
let favouriteTransportation = [
    "Car",
    "Bike",
    "Bicycle",
    "Helicoptor",
];
favouriteTransportation.map((transport) => {
    console.log(`I would like to own a ${transport}`);
});
// Question#14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
let guest_list = ["Babar", "Shaheen", "Rizwan"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}!, you are cordially invited for dinner. Please join us!`);
}
// Question#15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
// new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the 
//   guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${guest_list[1]} can not be able to come to our dinner`);
guest_list[1] = "Amir";
guest_list.map((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});
// Question#16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
//  invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
//   you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//   Print a new set of invitation messages, one for each person in your list.
guest_list.forEach((guest) => {
    console.log(`Hi ${guest}, we have found a bigger table for dinner.`);
});
guest_list.unshift("Imad");
guest_list.splice(2, 0, "Afridi");
guest_list.push("Haris");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, you are invited to dinner. Please join us!`);
}
// Question#17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
//    • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
//      only two people for dinner.
//    • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//      from your list,
//      print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//    • Print a message to each of the two people still on your list, letting them know they’re still invited.
//    • Remove the last two names from your list, so you have an empty list.
//      Print your list to make sure you actually have an empty list at the end of your program.
// a
guest_list.map((guest) => {
    console.log(`Sorry ${guest}, we can only invite 2 persons for the dinner `);
});
// b
while (guest_list.length > 2) {
    let removedList = guest_list.pop();
    console.log(`Sorry ${removedList}, we can't invite you to dinner.`);
}
// c
for (let i = 0; i < guest_list.length; i++) {
    console.log(`${guest_list[i]}, you are still invited to dinner. see you there!`);
}
// d
guest_list.length = 0;
console.log(guest_list); //[]
// Question#18
// Seeing the World: Think of at least five places in the world you’d like to visit.
//   a. Store the locations in an array. Make sure the array is not in alphabetical order.
//   b. Print your array in its original order.
//   c. Print your array in alphabetical order without modifying the actual list.
//   d. Show that your array is still in its original order by printing it.
//   e. Print your array in reverse alphabetical order without changing the order of the original list.
//   f. Show that your array is still in its original order by printing it again.
//   g. Reverse the order of your list. Print the array to show that its order has changed.
//   h. Reverse the order of your list again. Print the list to show it’s back to its original order.
//   i. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//   j. Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order 
//      has changed.
// a
let placeToVisit = [
    "Saudia Arabia",
    "NewZealand",
    "Canada",
    "SwitZealand",
    "Maldive",
];
// b
console.log("Original Order");
console.log(placeToVisit);
// c Alphabatical Order
let alphabeticalOrder = placeToVisit.slice().sort();
console.log("Alphabatical Order");
console.log(alphabeticalOrder);
// d
console.log("Original Order");
console.log(placeToVisit);
// e
console.log("Reversed Alphabatical Order");
let reversedOrder = alphabeticalOrder.slice().reverse();
console.log(reversedOrder);
// f
console.log("Original Order");
console.log(placeToVisit);
// g
console.log("Reveresed Order");
console.log(placeToVisit.reverse());
// h
console.log("Again Reveresed Order");
console.log(placeToVisit.reverse());
// i
console.log("Alphabatical Order");
console.log(placeToVisit.sort());
// j
console.log("Reversed Alphabatical Order");
console.log(placeToVisit.sort().reverse());
// Question#19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
let numOfGuest = guest_list.length;
console.log(`Number of guest invited o Dinner is ${numOfGuest}`);
// Question#20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, 
// cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let rivers = ["Jhelum", "Satlaj", "Ravi", "Indus", "Chenab"];
console.log("Rivers: ", rivers);
let Apple = {
    name: "Apple",
    color: "Red",
    price: 300,
};
let Orange = {
    name: "Orange",
    color: "Orange",
    price: 200,
};
function fruitInfo(fruit) {
    console.log("Fruit Information:");
    console.log("------------------");
    console.log("Fruit Name: " + fruit.name);
    console.log("Fruit Color: " + fruit.color);
    console.log("Fruit Price: " + fruit.price);
}
fruitInfo(Apple);
fruitInfo(Orange);
// Question#22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing 
// the program.
let fruits = ["Apple", "Banana", "Orange"];
function wrongIndexErrorExample() {
    const fourthFruit = fruits[3];
    console.log(fourthFruit);
}
wrongIndexErrorExample();
function correctIndexErrorExample() {
    const thirdFruit = fruits[2];
    console.log(thirdFruit);
}
correctIndexErrorExample();
// Question # 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test#1
let car = "subaru";
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == "subaru");
// Test#2
console.log("Is car == 'honda' ? I predict False.");
console.log(car == "honda");
// Test#3
console.log("Is car.length > 0 ? I predict True.");
console.log(car.length > 0);
// Test#4
console.log("Is car.startsWith('a') ? I predict False.");
console.log(car.startsWith("a"));
// Test#5
console.log("Is car.includes('a') ? I predict True.");
console.log(car.includes("a"));
// Test#6
console.log("Is car.endsWith('a') ? I predict False.");
console.log(car.endsWith("a"));
// Test#7
console.log("Is car.toUpperCase() ? I predict True.");
console.log(car.toUpperCase() === "SUBARU");
// Test#8
console.log("Is car.length < 5  ? I predict False.");
console.log(car.length < 5);
// Test#9
console.log("Is car.toLowerCase() ? I predict True.");
console.log(car.toLowerCase() === "subaru");
// Test#10
console.log("Is car == 'toyota' ? I predict False.");
console.log(car == "toyota");
// Question#24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//   and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// a. Test for Equality & Inequality strings
let string1 = "Hello";
let string2 = "World";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
// b. Test for Lower Case Functions
let uppercase = "HELLO";
let lowercase = "hello";
console.log(uppercase.toLowerCase() === lowercase); // true
console.log(uppercase === lowercase); //false
// c. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//    and less than or equal to
let num1 = 10;
let num2 = 20;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
// d. Tests using "and" and "or" operators
let x = 10;
let y = 20;
let z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
console.log(x > y || y > z); //false
// e. Test whether an item is in a array
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let itemToFind = 4;
console.log(array.includes(itemToFind)); //true
// f. Test whether an item is not in a array
console.log(array.includes(9)); //false
// Question#25
// Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
//    If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails.
//    (The version that fails will have no output.)
let alien_color = "green";
if (alien_color === "green") {
    console.log("Player just earned 5 points");
}
if (alien_color === "brown") {
}
// Question#26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
// Question#27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color == "green") {
    console.log("Player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("Player earned 10 points");
}
else if (alien_color == "red") {
    console.log("Player earned 15 points");
}
// Question#28
// Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let personAge = 32;
if (personAge < 2) {
    console.log("Person is a baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("Person is a toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("Person is a kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("Person is a teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is an elder");
}
// Question#29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
// that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//   If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Banana", "Apple", "Grapes"];
console.log(favorite_fruits);
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas");
}
if (favorite_fruits.includes("Pine Apple")) {
    console.log("You really like Pine Apple");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("You really like Grapes");
}
if (favorite_fruits.includes("Strawberry")) {
    console.log("You really like Strawberry");
}
// Question#30
// Hello Admin: Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that
// will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Salman", "Aslam", "Zarnish", "Admin", "Zehra"];
usernames.forEach((name) => {
    if (name === "Admin") {
        console.log(`Hello ${name} would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again`);
    }
});
// Question#31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames.length = 0;
if (usernames.length === 0) {
    console.log("We need to find some users");
}
// Question#32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
//   current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//   If it has, print a message that the person will need to enter a new username.
//   If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Arsalan", "Sami", "Saima", "Talha", "SIDRAH"];
let new_users = ["Raza", "Sami", "Laiba", "Aslam", "Sidrah"];
let lowerCaseCurrentUsers = current_users.map((c_user) => c_user.toLowerCase());
new_users.forEach((name) => {
    if (lowerCaseCurrentUsers.includes(name.toLowerCase())) {
        console.log(`The username ${name} has already been used. You will need to enter a new username.`);
    }
    else {
        console.log(`Username ${name} is available`);
    }
});
// Question#33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//   Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((num) => {
    let suffix;
    if (num === 1) {
        suffix = "st";
    }
    else if (num === 2) {
        suffix = "nd";
    }
    else if (num === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log(`${num}${suffix}`);
});
// Question#34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//   For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//   The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//   such as I really love pizza!
let favorite_pizza = ["Greek pizza", "Neapolitan pizza", "Detroit pizza"];
favorite_pizza.forEach((pizza) => {
    console.log(`I like ${pizza}`);
});
console.log("I really love pizza");
// Question#35
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Dog", "Cat", "Rabitt"];
animals.forEach((animal) => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet because they are all friendly and good companions.");
// Question#36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
// on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.
const make_shirt = (size, text) => {
    console.log(`The size of the shirt is ${size} and the text printed on Tshirt is "${text}"`);
};
let text = "Apna Time Aega";
let size = "Medium";
make_shirt(size, text);
// Question#37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript.Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
// a different message.
function make_shirts(size = "Large", text = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the text printed on Tshirt is "${text}"`);
}
make_shirts();
make_shirts("Medium");
make_shirts("Small", "Keep Calm & Work Hard");
// Question#38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Khatmandu", "Nepal");
// Question#39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    console.log(`${city}, ${country}`);
}
city_country("Lahore", "Pakistan");
city_country("Paris", "France");
city_country("New York", "USA");
function make_album(artist_name, album_title, tracks) {
    let album = { artist_name, album_title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Shahzad Roy", "Teri Soorat");
let album2 = make_album("Atif Aslam", "Tere Sang Yaara");
let album3 = make_album("Aima Baig", "Item Number");
let album4 = make_album("Atif Aslam", "Item Number", 78);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
// Question#41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magicians = ["Taimoor", "Ashraf", "Khuram", "Kamran"];
function show_magicians(magicianNames) {
    magicianNames.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
// Question#42
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function make_great(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + " the Great";
    }
}
make_great(magicians); //modifying the list
show_magicians(magicians); //showing modified list of items
// Question#43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate 
// array. Call show_magicians() with each array to show that you have one array of the original names and one array 
// with the Great added to each magician’s name.
let OriginalMagiciansCopy = ["Taimoor", "Ashraf", "Khuram", "Kamran"];
function make_great_copy(magicianNames) {
    return magicianNames.map((magician) => `${magician} the Great`);
}
let greatMagicians = make_great_copy(OriginalMagiciansCopy); //modified list copy
console.log("Original Names");
show_magicians(OriginalMagiciansCopy);
console.log("Modified Names");
show_magicians(greatMagicians);
// Question#44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log(`Making a sandwich with the following items: ${items.join(", ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "mayo");
make_sandwich("peanut butter", "jelly");
const carInfo = (manufacturer, model, ...additionalDetails) => {
    let carDetails = {
        Manufacturer: manufacturer,
        Model: model,
    };
    // Merge all additional details into the carDetails object
    additionalDetails.forEach((details) => {
        Object.assign(carDetails, details);
    });
    // Return the fully populated carDetails object
    return carDetails;
};
let myCar = carInfo("Toyota", 2013, { Color: "red" }, { Transmission: "manual" });
console.log(myCar);
