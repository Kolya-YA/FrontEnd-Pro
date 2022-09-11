hljs.highlightAll()

fetch('task.js')
    .then(resp => resp.text())
    .then(data => {
        blockOfCode.innerHTML = data
        hljs.highlightAll()
    })