"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    if(color === "purple"){return "I like lavender better but purple is cool too!"
    } else if(color === "blue") {
        return "Blue is always a safe choice!"
    }else{
        return "That's a nice color!"
    }
}
// console.log(analyzeColor("green"));
// console.log(analyzeColor("purple"));
// console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(randomColor);
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    switch (color) {
        case "purple":
            return "I like lavender better but purple is cool too!";
        case "blue":
            return "Blue is always a safe choice!";
        default:
            return "That's a nice color!";
    }
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// var color = prompt("What is your favorite color?");
// alert(analyzeColor(color));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(totalPrice, luckyNumber){
    if(luckyNumber === 0){
        return totalPrice;
    }else if(luckyNumber === 1){
        return totalPrice - (totalPrice * .1);
    }else if(luckyNumber === 2){
        return totalPrice - (totalPrice * .25);
    } else if(luckyNumber === 3){
        return totalPrice - (totalPrice *.35);
    }else if(luckyNumber === 4){
        return totalPrice - (totalPrice *.5);
    }else if(luckyNumber === 5){
        return totalPrice - totalPrice;
    }
}

// console.log(calculateTotal(100, 0));
// console.log(calculateTotal(100, 2));
// console.log(calculateTotal(100, 4));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var userBill = Number(prompt("What is your total?"));
// var newTotal = calculateTotal(userBill, luckyNumber);
// alert("Your lucky number is " + luckyNumber + ". That means your new total is $" + newTotal + "!")
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// var enterNumber = confirm("Would you like to enter a number?");
//
// if(enterNumber) {
//     var userNumber = Number(prompt("Enter your number!"));
//
//     if (userNumber % 2 === 0) {
//         alert("That number is even!");
//     } else if(userNumber % 2 === 1){
//         alert("That number is odd!");
//     } else if(isNaN(userNumber)){
//         alert("Incorrect data type!");
//     }
// }
//     alert(userNumber + 100);
//     if(userNumber >= 0){
//         alert("Your number is positive");
//     } else if(userNumber < 0){
//         alert("Your number is negative");
//     } else {
//  }

function enterNumber(input){
    return confirm("Would you like to enter a number?");
}

function userNumber(){
    return Number(prompt("Enter your number!"));
}

function oddOrEven(num){
    if(num % 2 === 0){
        return "That number is even!";
    } else {
        return "That number is odd!";
    }
}

function plusOneHundred(num){
    return num + 100;
}

function posOrNeg(num){
    if(num >= 0){
        return "That number is positive";
    } else {
        return "That number is negative";
    }
}
function alerting(input){
    alert(oddOrEven(num));
    alert(plusOneHundred(num));
    alert(posOrNeg(num));
}
function figureOutNumber(){
    var num = userNumber();
    if(isNaN(num)){
        return "Incorrect data type!";
    } else {
        return userNumber();
    }
}