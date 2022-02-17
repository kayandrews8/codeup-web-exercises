"use strict";

// Write a function that returns the string "I have no idea what you just said"

function whatYouSaid(input){
    return "I have no idea what you just said.";
}
// console.log(whatYouSaid("yes"));

// Write a function that takes in a number and returns that number times 2

function timesTwo(number){
    return number * 2;
}
// console.log(timesTwo(50));

//Write a function that takes in a number and returns that number plus itself

function plusItself(num){
    return num + num;
}
// console.log(plusItself(12));

// Now write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled

function sumOfDoubles(num1, num2){
    var doubleOne = num1 * 2;
    var doubleTwo = num2 * 2;
    return doubleOne + doubleTwo;
}

// console.log(sumOfDoubles(4, 2));

// Write a function that takes in a number and squares it
function squared(num){
    return num * num;
}
// console.log(squared(10));

//Write a function that takes in a string and returns its length
function stringLength(str){
    return str.length;
}
// console.log(stringLength("Kaylah"));

//Write a function that takes in two strings and returns the sum of their lengths
function sumOfLengths(str1, str2){
    return str1.length + str2.length;
}
// console.log(sumOfLengths("Kaylah", "Jelani"));

function evenOrOdd(number){
    if(number % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}
// console.log(evenOrOdd(14));

// Write a function called removeBs that takes in an array and removes ever letter B regardless of case
function removeBs(){
    var noBs = ['abc', 'berries', 'baby', 'bad']
    var bsGone = noBs.filter();
}
/*
Write a function, createUserMsg, that takes in a user object like the following...
{
    username: ‘jbomb’,
    email: ‘john@email.com’,
    isAdmin: true
}
...and returns a string output that displays in the console like this...
‘User jbomb is an admin and can be reached at john@email.com’
If jbomb were not an admin, the message should display...
‘User jbomb is not an admin and can be reached at john@email.com’
*/

var userInfo = {
    username: 'kandrews22',
    email: 'kandrews4321@ymail.com',
    isAdmin: true
}

function createUserMsg(userInformation){
    if(userInformation.isAdmin === true){
        console.log('The user ' + userInformation.username + ' is an admin and can be reached at ' + userInformation.email);
    } else {
        console.log('The user ' + userInformation.username + ' is not an admin and can be reached at ' + userInformation.email);
    }
}

// Write a function named areaOrPerimeter that returns the area of a square OR the perimeter of a rectangle based on the parameters passed into the function
//Bonus: have the function return false if the input is not a number or a numeric string
function areaOrPerimeter(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return false;
    } else if(num1 === num2){
        return num1 * num2;
    }else {
        return (num1 * 2) + (num2 *2);
    }

}

// console.log(areaOrPerimeter(2,2));
// console.log(areaOrPerimeter(4,6));
// console.log(areaOrPerimeter('2','bob'));


//Write a function that takes in two numeric strings, adds the numbers and returns the sum as a string
// Bonus: return false if the input is anything other than a numeric string

function sumTheStrings(input1, input2){
    if(typeof input1 !== 'string' || typeof input2 !== 'string'){
        return false;
    }else{
        return (parseFloat(input1) + parseFloat(input2)).toString();
    }
}