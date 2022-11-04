const output = document.querySelector('#output')

const showText = text => {
    output.innerHTML += `${text}<br>`
}

showText('Hello world!')
showText('Another line')
showText('New line')