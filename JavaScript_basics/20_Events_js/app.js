// Select Element
// addEventListener()
// what event, what to do


// const btn = document.querySelector('.btn') // we get back a node object from this
// const heading = document.querySelector('h2')

// btn.addEventListener('click', function() {
//     // console.log('You clicked the button');
//     heading.classList.add('red')
// }) // 2 arguments --> what event are we listening for, callback function

// ##################################

const btn = document.querySelector('.btn') // we get back a node object from this
const heading = document.querySelector('h2')

function changecolors() {
    let hasclass = heading.classList.contains('red')
    
    if (hasclass){
        heading.classList.remove('red')
    }
    else {
        heading.classList.add('red')
    }
}

btn.addEventListener('click', changecolors) // NEVER call the function here, ONLY refrence



