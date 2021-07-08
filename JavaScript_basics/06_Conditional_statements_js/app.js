if (true){
    console.log("Checking my conditional statement");
}

// const value = true
const value1 = 2
const value2 = 2
const result = value1 < value2

if (value1 > value2){
    console.log('First number is bigger than second number');
}
else if (value1 == value2){
    console.log('Both numbers are equal');
}
else{
    console.log('Second number is bigger than first number');
}


// Logical operators || and && work the same as in python. Try it if you want 


// Learn how to use switch, case
const dice = 4  // Try changing this value and see how the statements change in console

switch (dice) {
    case 1:
        console.log('You got one');
        break
    case 2:
        console.log('You got two');
        break
    case 3:
        console.log('You got three');
        break
    default:
        console.log('You did not roll any dice');

}