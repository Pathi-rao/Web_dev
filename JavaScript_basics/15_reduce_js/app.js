// reduce --> reduces the value in an Array to a single value (number, array or object)

const new_people = [
    {name: 'bob', age: '25', 'position': 'developer', id:1, salary:200},
    {name: 'susan', age: '35', 'position': 'designer', id:2, salary:300},
    {name: 'peter', age: '45', 'position': 'owner', id:3, salary:500},
    {name: 'parker', age: '25', 'position': 'superhero', id:4, salary:900}
]

const total_sal = new_people.reduce(function name(total, current) {
    console.log(`total ${total}`);
    console.log(`current ${current.salary}`);
    total += current.salary

    return total 
}, 0) // zero is the inital value, change it and see how the o/p is varying

console.log(`Overall total salary is: ${total_sal}`);