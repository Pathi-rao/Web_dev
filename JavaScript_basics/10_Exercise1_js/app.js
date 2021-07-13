// Example_1 --> arrays, for 

const first_name = ["bandi", "dalli", "pathi"]
const last_name = "jaathiratnam"

let full_name = []

for (let i = 0; i < first_name.length; i++) {
    full_name.push(first_name[i] + ' ' +last_name)
    
}

console.log(full_name);
console.log(' ');

// ################################# +++++++++++++++++++++++++++++++ #################################

// Example_2 --> Functions, return, if, arrays, for, loop

const gas = [1, 2, 3]
const food = [4, 5, 6]

function cal_total(arr){
    let total = 0
    for (let index = 0; index < arr.length; index++) {
        total += arr[index]
    }
    if (total > 10){
        console.log("Well done! You are budgeting your money")
    } else{
        console.log("Careful, You are spending too much.")
    }
    return total
}

console.log("Gas total is, " + cal_total(gas));
console.log(' ');
console.log("Food total is, " + cal_total(food));