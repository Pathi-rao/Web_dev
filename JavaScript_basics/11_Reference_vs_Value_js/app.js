// Reference vs Value

// Primitive data type --> String, Number, Symbol, Boolean, Undefined, Null


const num_1 = 1
let num_2 = num_1
num_2 = 7
console.log(`The first number is ${num_1} and the Second number is ${num_2}`);

// ################ ++++++++++++++++ ################


let person_1 = {name:'bob'}
let person_2 = person_1

person_2.name = 'susy'

console.log(`The name of the first person is ${person_1.name}`);
console.log(`The name of the first person is ${person_2.name}`);

/* If you notice the output at this point, the name of the first person is also changed (to susy). 

This is because, when assgining primitive data type value to a variable, change are made directly on that
variable without affecting the original value

But, when assigning non-primitive data type value to a variable, it is done by reference. So any changes,
will affect the references. 

That's why at the start the values didn't change because we using primitive data type but in the 
second example, we used dictionary and thus all the reference values are changed.*/
