/* If a function takes another functions as an argument, 
then that functions is called a higher order function.

Call back function - Passed to another function as an argument and 
executed inside that function. */

console.log('callback functions');
// Call back function
function morning(){ 
    console.log('Hey there!'); 
}

// higher order function
function greet(name, call_back) {
    const myname = 'bob'
    console.log(`Hello ${name}, My name is ${myname}`);
    call_back()
}

greet ('booboo', morning)


// #########################################
console.log('Powerful Arrays');
// Powerful Arrays

const people = [
    {name: 'bob', age: '25', 'position': 'developer'},
    {name: 'susan', age: '35', 'position': 'designer'},
    {name: 'peter', age: '45', 'position': 'owner'}
]


function show_person(person){
    console.log(person);
    console.log(person.name.toUpperCase());
}

//  We are NOT INVOKING the function, we are ONLY REFERENCING the function

people.forEach(show_person) // Similar to array indexing. 
/* for each element in people, call that function which will display the item/element 
where each item is an object. Since they are all objects, we can access their properties.
*/

console.log(' ');
console.log(' ');

// Similar approach but this time using an anonymus function
people.forEach( function(item) { // anonymus function
    console.log(item);
    console.log(item.name.toUpperCase());
})


// ########################################################
console.log(' ');
console.log(' ');


console.log('maps');
/* map
unlike forEach, map returns a new array
unlike filter, it does not change the size of the original array */

const ages = people.map(function (item) {
    console.log(item);
    return 'hello world'
})
console.log(ages); // If we look at the o/p we have 3 hello worlds, because we have 3 items in people

// 
const names = people.map(function (person) {
    console.log(`<h1>${person.name}</h1>`);
})
// document.body.innerHTML = names.join('') // DOM
console.log(names);

// #######################################
// filter
const young_people = people.filter(function (person) {
    return person.age >= 30
})
console.log(young_people);

// #######################################
// find --> Good at finding unique values

const new_people = [
    {name: 'bob', age: '25', 'position': 'developer', id:1},
    {name: 'susan', age: '35', 'position': 'designer', id:2},
    {name: 'peter', age: '45', 'position': 'owner', id:3}
]

const persons = new_people.find(function (people) {
    return people.id == 1
})
console.log(persons);