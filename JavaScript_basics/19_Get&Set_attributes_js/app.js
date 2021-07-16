// getAttribute()

const first = document.querySelector('.first')
// const classvalue = first.getAttribute('class')
const idvalue = first.getAttribute('id')
console.log(idvalue);

const link = document.getElementById('link')
const showlink = link.getAttribute('href')
console.log(showlink);

const links = document.querySelectorAll('.first')
console.log(links);

// ##############################
// setAttribute()

const last = link.nextElementSibling
last.setAttribute('class', 'first')
last.textContent = 'I also have a class of first'