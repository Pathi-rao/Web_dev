// similar to CSS

// select the element or group of elements that you want to effect

// Decide the effect we want to apply to the selection

document.body.style.backgroundColor = "blue"
document.getElementById("btn").style.color = "red" // btn is the button id that we defined in the HTML

const element = document.getElementById('element')
// Once we select it then we can do something

const btn = document.getElementById("btn")
const name = btn.nodeName
const css = btn.style

console.log(btn);
console.log(name);
console.log(css);