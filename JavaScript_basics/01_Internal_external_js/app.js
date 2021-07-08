document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Every button does the same thing')
    })
})