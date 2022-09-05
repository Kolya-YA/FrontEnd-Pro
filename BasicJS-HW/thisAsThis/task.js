// First level
class City {
    constructor(name , population, foundingYear) {
        this.name = name
        this.population = population
        this.foundingYear = foundingYear
    }
    
    curYear = () => (new Date()).getFullYear()
    
    age() {
        return this.curYear() - this.foundingYear
    }
}

// Second level
class CityWithGap extends City {

    formOfAge(age) { 
        const ageStr = '' + age
        const lastDigit = +ageStr.charAt(ageStr.length - 1) 
        switch (lastDigit) {
            case 1:
                return 'год'
            case 2:
            case 3:
            case 4:
                return 'года'        
            default:
                return 'лет'
        }
    }

    ageGap(myAge) {
        const yearsOfGap = Math.abs(this.curYear() - this.foundingYear - myAge)
        return `${yearsOfGap} ${this.formOfAge(yearsOfGap)}`
    }
}

const firstLevel = () => {
    const paris = new City('Paris', 6000000, -53)
    const berlin = new City('Berlin', 3645000, 1237)
    
    console.log(`${berlin.name} is ${berlin.age()} years old`)
    console.log(`${paris.name} is ${paris.age()} years old`)
}

const secondLevel = () => {
    const parisWithGap = new CityWithGap('Париж', 6000000, -53)
    const berlinWithGap = new CityWithGap('Берлин', 3645000, 1237)

    const outStr = 'Разница в возрасте с городом'
    console.log(`${outStr} ${parisWithGap.name} ${parisWithGap.ageGap(50)}`)
    console.log(`${outStr} ${berlinWithGap.name} ${berlinWithGap.ageGap(52)}`)
    console.log(`${outStr} ${berlinWithGap.name} ${berlinWithGap.ageGap(54)}`)
}