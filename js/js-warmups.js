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