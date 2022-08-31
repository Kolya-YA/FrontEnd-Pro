hljs.highlightAll()
firstBtn.addEventListener('click', () => firstLevel())
secondBtn.addEventListener('click', () => secondLevel())

fetch('task.js')
    .then(resp => resp.text())
    .then(data => {
        blockOfCode.innerHTML = data
        hljs.highlightAll()
    })