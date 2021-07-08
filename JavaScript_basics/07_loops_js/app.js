//  While is normal while like in python
let value = 10

while (value > 0){
    console.log('Value is ' + value);
    value--
    if (value == 0){
        console.log('End of While loop');
    }
}

//  do while --> do something while somthing is true

let money = 10

do{
    console.log('Your total money is ' + money);
    money--
} while (money != 0)


// for loop

// let i 
// for (i=0..) we can do this or the following

for (let i = 0; i < 10; i++) {
    console.log('value of i is '+i);
    
}