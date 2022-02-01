console.log("Hello from external JavaScript")

// alert("Welcome to my Website!");
//
// var favoriteColor = prompt("What is your favorite color?");
// alert("Awesome, " + favoriteColor + " is my favorite color too!");


// var pricePerDayInDollars = 3;
// var daysOfLittleMermaid = Number(prompt("How many days are you renting The Little Mermaid?"));
// var daysOfBrotherBear = Number(prompt("How many days are you renting Brother Bear?"));
// var daysOfHercules = Number(prompt("How many days are you renting Hercules?"));
// var total = (daysOfLittleMermaid + daysOfBrotherBear + daysOfHercules) * pricePerDayInDollars;
// alert("Your total will be $" + total);

// var googlePay = Number(prompt("How much does Google pay you per hour?"));
// var hoursWorkedForGoogle = Number(prompt("How many hours did you work for Google this week?"))
// var amazonPay = Number(prompt("How much does Amazon pay you per hour?"));
// var hoursWorkedForAmazon = Number(prompt("How many hours did you work for Amazon this week?"));
// var facebookPay = Number(prompt("How much does Facebook pay you per hour?"));
// var hoursAtFacebook = Number(prompt("How many hours did you work for Facebook this week?"));
// var moneyMadeThisWeek = (googlePay * hoursWorkedForGoogle) + (amazonPay * hoursWorkedForAmazon) + (facebookPay *hoursAtFacebook);
// alert ("You made $" + moneyMadeThisWeek + " this week!");

// var classNotFull = true;
// var doesNotConflict = true;
// var canEnroll = (classNotFull && doesNotConflict);
// alert("It is " + canEnroll + " that you can enroll in this class");

var productsBought = 2;
var productOfferExpired = false;
var premiumMember = false;
var offerApplied = (productOfferExpired + productsBought > 2 || premiumMember);
alert("It is " + offerApplied + " that you can use this offer!");

