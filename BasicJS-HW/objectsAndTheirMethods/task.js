// First level
const sumOfSalaries = emp => Object.values(emp).reduce((acc, x) => acc + x, 0)

// Second level
const multiplyNumeric = obj => Object.entries(obj).forEach(
    ([key, val]) => obj[key] = typeof val == 'number' ? val * 2 : val
)

const firstLevel = () => {
    const salaries01 = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    const salaries02 = {
        Joseph: 0
    }
    
    const salaries03 = {}
    
    const salaries04 = {};
    [...Array(1000)].forEach((_, i) => { salaries04[`name${i}`] = Math.floor((Math.random() * 1000) + 1) })

    console.log(sumOfSalaries(salaries01))
    console.log(sumOfSalaries(salaries02))
    console.log(sumOfSalaries(salaries03))
    console.log(sumOfSalaries(salaries04))
}

const secondLevel = () => {
    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    }
    console.group('Before')
    console.table(menu)
    console.groupEnd()
    multiplyNumeric(menu)
    console.group('After')
    console.table(menu)
    console.groupEnd()
}