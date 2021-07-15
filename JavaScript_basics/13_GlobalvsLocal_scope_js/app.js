/* Global vs Local scopes

Global Scope-
Any variable outside code block {} is a Global variable and can be
accessed anywhere in the program

Local Scope- Cannot be accessed outside code blocks
*/

let name = 'bob'
name = 'bobo'

function dummy() {
    // some code here...
    console.log(name);
    name = 'peter'
    const age = 45
}

dummy()
// console.log(age);

console.log(`Hi, My name is ${name}`);