// Template literlas -- ES6+
// Backtick characters `` 
// Interpolation ${} - insert expression value

// Same as string interpolation in python

const name = 'john'
const age = 25

const sentence = `Hey it's ${name}. His age is ${age}`

console.log(sentence);


// #############++++++++++++++#############


// Array properties and Methods

let operators = ['Ash', 'Zofia', 'Finka', 'Twitch', 'Hibana', 'Dokkaebi', 'Amaru']

// console.log(operators.length);
// console.log(operators.reverse());

// console.log(operators.unshift('Nök')); // appending to the list

// console.log(operators.splice(0,1));
// console.log(operators);


// #############++++++++++++++#############


// for loops using arrays

const attacker = ', is an attacker'

for ( i=0; i< operators.length; i++) {
    console.log(operators[i]+attacker);
}
