
// var number = 2;
// while (number <= 65536){
//     console.log(number);
//     number = number *2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
var conesWanted

do{
    conesWanted = Math.floor(Math.random() * 5) +1;
    if(conesWanted > allCones){
        console.log("I can not sell you " + conesWanted + " I only have " + allCones + " left");
    } else {
    allCones -= conesWanted;
    console.log("I need to sell " + allCones + " more cones!");
    console.log("that's " + conesWanted + " sold..");
    }
} while(allCones > 0);
console.log("Yay! I sold them all!");

