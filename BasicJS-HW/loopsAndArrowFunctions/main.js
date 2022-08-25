const firstLevel = () => {
    let evenNums = ""
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            evenNums += `${i} `
            console.log(`Even number: ${i}`)
        }

    }
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
