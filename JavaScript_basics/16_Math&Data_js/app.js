// Math

// const number = 1.2345
// const result = Math.floor(number) // rounds up the number --> Output: 1


// const number = 1.2345
// const result = Math.ceil(number) // Output: 2


// const number = 1.2345
// const result = Math.sqrt(number) // Output: 1.111080555135405


// const number = 1.2345
// const result = Math.sqrt(number) // Output: 1.111080555135405


const result = Math.random() // This o/p can never be 1

console.log(result);

// ############################################


// Date

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const date = new Date ()
console.log(date);
console.log(date.getMonth());

console.log(months[date.getMonth()]);
console.log(days[date.getDay()]);
console.log(date.getFullYear());

const sentence = `Today is ${days[date.getDay()]} ${date.getMonth()}th of ${months[date.getMonth()]} ${date.getFullYear()}`
console.log(sentence);

document.body.innerHTML = sentence // DOM --> Document Object Model