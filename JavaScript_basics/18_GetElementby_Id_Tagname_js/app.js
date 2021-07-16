/* Select the element or group of elements that we want and
decide the effect that we want to apply to the slection */

const h1 = document.getElementById('title')
h1.style.color = 'red'

document.getElementById("btn").style.backgroundColor = "blue"
document.getElementById("btn").style.color = "white"

// ####################################

// Get element by tag name
const tags = document.getElementsByTagName("h1")
console.log(tags);
// names[0].style.color = 'blue'

const names = document.getElementsByTagName("li")

const better_items = [...names]          // [...] - spread operator
better_items.forEach(function(item){
    console.log(item); // This directly gives us an array
})


// take a look at queryselector examples if you are not familiar