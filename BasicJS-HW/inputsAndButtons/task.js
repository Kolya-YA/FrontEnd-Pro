// First level
const disBtn = document.querySelector('#disable-btn')
const enBtn = document.querySelector('#enable-btn')
const fInput = document.querySelector('#first-input')

disBtn.addEventListener('click', event => {
    console.log("disBtn")
    fInput.disabled = true
})
enBtn.addEventListener('click', event => {
    console.log("enBtn")
    fInput.disabled = false
})

// Second level

const leftInput = document.querySelector('#left-input')
const rightInput = document.querySelector('#right-input')
const swapBtn = document.querySelector('#swap-btn')


swapBtn.addEventListener('click', e => {
    const tmp = leftInput.value
    leftInput.value = rightInput.value
    rightInput.value = tmp;
    e.preventDefault()
})