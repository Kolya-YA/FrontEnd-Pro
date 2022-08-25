const firstLevel = () => {
    let evenNums = ""
    console.group("Even numbers from 2 to 10")
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            evenNums += `${i} `
            console.log(`Even number: %c${i}`, "color: crimson; background: lightblue; padding: 3px 5px;")
        }

    }
    console.groupEnd()
    alert(`Even numbers from 2 to 10: ${evenNums}`)
    
    let i = 0
    while (i < 3) {
        alert(`number ${i}!`);
        i++
    }
}

const secondLevel = () => {
    const ask = (question, yes, no) => {
        confirm(question) ? yes() : no()
      }


  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  )
}

firstBtn.addEventListener('click', () => firstLevel())
secondBtn.addEventListener('click', () => secondLevel())