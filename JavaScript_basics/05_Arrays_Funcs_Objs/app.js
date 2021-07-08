// define an array
const friends_array = ['Bob', 'Susan', null, undefined]


console.log(friends_array);


// Create a function and playing with it
function hello(){
    console.log('hello: ', friends_array[0])
    console.log('hello: ', friends_array[1])
    console.log('hello: ', friends_array[2])
}
hello()

function greet(name){
    console.log('hello, '+ name);
}
greet('Bobby')
greet('Susssuan')

// ##############+++++++++++++++++##############


// Objects

const person = {
    name:'john',
    lastname:'abraham'
}