const firstLevel = () => {
    const number = 100500
    const string = '100500'
    
    console.log('number == string', number == string)
    console.log('number === string', number === string)
}

const secondLevel = () => {
    const vallet = 100
    const tomatoPrice = 10
    const cucumberPrice = 5
    const applePrice = 15

    const marketExpenses = tomatoPrice * 2 + cucumberPrice * 2 + applePrice * 2
    const moneyForNuts = vallet - marketExpenses
    console.log(`${moneyForNuts} — money for nuts`)
    console.log('moneyForNuts > marketExpenses', moneyForNuts > marketExpenses)
}

firstBtn.addEventListener('click', () => firstLevel())
secondBtn.addEventListener('click', () => secondLevel())
