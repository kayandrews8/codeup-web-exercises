var oddNumber;

while(true){
oddNumber = Number(prompt("Please enter an odd number between 1 and 50"));
if( oddNumber % 2 === 1){
    break;
}
}


console.log("Number to skip is " + oddNumber)
for (var i =1; i < 50; i += 2){
if (oddNumber === i){
    console.log("Skipping number " + oddNumber)
    continue;
}
    console.log(i)

}