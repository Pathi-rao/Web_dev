// String methods

let text = 'John abraham'
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2));

console.log(text.indexOf('P')); // gives negative 1 because captial p is not present in our string
console.log(text.indexOf('h')); // gives only the index of first h

console.log(text.trim()); // This trims any whitespaces which are at the start
console.log(text.includes('ohn'));
console.log(text.slice(0,4)); //string slicing just like arrays