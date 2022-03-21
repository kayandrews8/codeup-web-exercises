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
/**
================================= WARM UP

Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.

    var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

createNames(firstNames, lastNames) // returns...

    [
    {
        firstName: 'CJ',
        lastName: 'Cat'
    },
        {
            firstName: 'Max',
            lastName: 'Feline'
        },
        {
            firstName: 'Claude',
            lastName: 'Kitten'
        },
        {
            firstName: 'Meowmeow',
            lastName: 'Calico'
        }
    ]

HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function. */

function createNames(array1, array2){
    for(var i = 0; i < firstName.length; i ++){
        return {firstName: array1[1], lastName: array2[1]};
    }
}

var firstName = ['kay', 'jay', 'moi', 'ton'];
var lastName = ['and', 'band', 'cand', 'dand'];
// console.log(createNames(firstName, lastName));


// Write a function that accepts two integers and returns the remainder by diving the larger value by the smaller value. Dividing by 0 should return NaN.

function remainder(num1,num2){
    if(num1 > num2){
        return num1 % num2;
    } else if(num2 > num1){
        return num2 % num1;
    }
}

// console.log(remainder(14,135));

function isLockNessMonster(str){
    return (str.includes('three fifty') || str.includes('tree fiddy') || str.includes('3.50'));
}

// console.log(isLockNessMonster("The leading batter this year is hitting three fifty"));
// console.log(isLockNessMonster("The cost of the ferry across Loch Ness is 3.50"));
// console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
// console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));


//Creat a function that accepts an object with two properties, parcelNumber and weight, and returns the weight.
var parcel = {
    parcelNumber: 4,
    weight: 18
}
function parcelWeight(object){
    return parcel.weight;
}

// console.log(parcelWeight(parcel));

//Create a function that accepts an array of objects with two properties, parcelNumber and weight, and returns the total weight of all parcels

var parcels = [
    {parcelNumber: 6, weight: 20},
    {parcelNumber: 4, weight: 13},
    {parcelNumber: 9, weight: 18},
    {parcelNumber: 3, weight: 9}
]
function totalWeight(arr){
    var total = 0;
    for(var i = 0; i < parcels.length; i++){
        total += parcels[i].weight;
    }
    return total;
}

// console.log(totalWeight(parcels));


//Create a header that says "Good morning!", then create a button that says 'Press if after 12pm" that will change the heading to "Good afternoon"

var greeting = document.getElementById('main-header');
var greetingButton = document.querySelector('button');
function changeGreeting(){
    greeting.innerText = 'Good afternoon!'
}

// greetingButton.addEventListener('click', changeGreeting);

/*
================================= JS WARM UP

Consider the following array of users:

    var users = [
        {
            username: 'fsmith',
            email: 'fsmith@email.com',
            numberOfLogins: 23
        },
        {
            username: 'ksmith',
            email: 'ksmith@email.com',
            numberOfLogins: 100
        },
        {
            username: 'lsmith',
            email: 'lsmith@email.com',
            numberOfLogins: 10
        }
    ];

1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.

returnFirstUser(users) should return...

{
    username: 'fsmith',
        email: 'fsmith@email.com',
    numberOfLogins: 23
}

2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
for all users.

returnTotalUserLogins(users) should return... 133

3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
user object with the highest number of logins.


returnMostFrequentUser(users) should return...

{
    username: 'ksmith',
        email: 'ksmith@email.com',
    numberOfLogins: 100
}
*/

var users = [
    {
        username: 'fsmith',
        email: 'fsmith@email.com',
        numberOfLogins: 23
    },
    {
        username: 'ksmith',
        email: 'ksmith@email.com',
        numberOfLogins: 100
    },
    {
        username: 'lsmith',
        email: 'lsmith@email.com',
        numberOfLogins: 10
    }
];

function returnFirstUser(arr){
    return arr[0];
}

// console.log(returnFirstUser(users));


function returnTotalUserLogins(arr){  //can also use a for each loop to achieve the same return statement
    var total = 0;
    for(var i = 0; i < users.length; i++){
        total += users[i].numberOfLogins;
    }
    return total;
}

// console.log(returnTotalUserLogins(users));

function returnMostFrequentUser(){

}
/*
================================= WARM UP

Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:

{
    operation: 'subtract' (or 'multiply' or 'add'),
    integer: 7 (or any positive or negative integer)
}

Example 1...

var operations1 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
]


computeOperations(operations1, 10) // returns 20


Example 2...

var operations2 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
]

computeOperations(operations2, 10) // returns 60


Example 3...

var operations3 = [

    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    },
]

computeOperations(operations3, 10) // returns 0
 */


var operations1 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
];

var operations2 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
];

var operations3 = [

    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    },
];

// function computeOperations(arrOfOperators, startingValue){
//     var total = startingValue;
//     arrOfOperators.forEach(function(operator){
//         if(operator.operation === 'subtract'){
//             total -= operator.integer;
//     } else if(operator.operation === 'multiply'){
//             total *= operator.integer;
//         }else if(operator.operation === 'add')
//         total += operator.integer;
// });
//     return total;
//
// }

// console.log(computeOperations(operations1, 10));
// console.log(computeOperations(operations2, 10));
// console.log(computeOperations(operations3, 10));

function computeOperations(operators, startingNum) {
    // create a total variable that we'll change with each iteration of loop
    var total = startingNum;

    // loop through each operation and console log each number
    for(var i = 0; i < operators.length; i++) {
        if (operators[i].operation === 'add') {
            total += operators[i].integer;
        } else if (operators[i].operation === 'subtract') {
            total -= operators[i].integer;
        } else if (operators[i].operation === 'multiply') {
            total *= operators[i].integer;
        }
        // console.log(operator.integer);
        // console.log(operator.operation);
    }
    // based on the operation value, we can add/subtract/multiple the current integer to the total variable
    // return total variable
    return total;
}

// console.log(computeOperations(operations1, 10));
// console.log(computeOperations(operations2, 10));
// console.log(computeOperations(operations3, 10));


/*Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.

Examples:

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];

addTwos(nums1) // returns 2
addTwos(nums2) // returns 4
addTwos(nums3) // returns 0
addTwos(nums4) // returns 8
addTwos(nums5) // returns 10
 */

// var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];

function addTwos(arr) {
    var total = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
        return total += 2
        } else{
            return 0
        }
    }
}

// console.log(addTwos(nums1));
// console.log(addTwos(nums2));
// console.log(addTwos(nums3));
// console.log(addTwos(nums4));
// console.log(addTwos(nums5));

/*
================================= WARM UP

Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.

    Examples...

returnStringObject('hello') // returns...

{
    stringValue: 'hello',
        stringArray: ['h', 'e', 'l', 'l', 'o']
}

returnStringObject('codeup') // returns...

{
    stringValue: 'codeup',
        stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
}
*/

function returnStringObject(str){
    var obj = {
        stringValue: str,
        stringArray: str.split("")
    }

    return obj;

}
// console.log(returnStringObject('kaylah'));
// console.log(returnStringObject('morning'));


/*
Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2
 */

var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2

function countNegatives(arr){
    var total = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
        return total ++;
        } else {
            return total;
        }
    }
}

// console.log(countNegatives(nums2));


/*
Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.

    Example...
*/
var users = [
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@email.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: 'sally@email.com'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        email: 'fred@email.com'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith',
        email: 'cathy@email.com'
    },
    {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@email.com'
    },
];



function createFirstNamesArray(userArray){
    var firstNames = [];
    for(var i = 0; i < userArray.length; i++){
        firstNames += userArray[i].firstName;
    }
}
// console.log(createFirstNamesArray(users)); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']

var bigSquare = document.querySelector('#square');
var colorButton = document.querySelector('#change-color');
function changeSquare(){
    bigSquare.style.backgroundColor = 'lavender';
}
// colorButton.onclick = changeSquare();

// $('li').hover(
//     function(){
//         $(this).css('color', 'red');
//     },
//     jQuery(function($){
//         $(".square").css("background-color",$(".square").attr("data-color"));
//     });
// $('.square').hover(function(){
//     $(this).attr('data-color');
// }), function(){
//     $(this).attr('data-color');
// };

$('#changingColors .square').click(function() {
    $(this).toggleClass('yellow');
})