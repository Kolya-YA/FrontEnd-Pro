const camelize = str => str
    + " --> "
    + str.split('')
    .map((letter, i, arr) => {
        if (letter === '-') arr[i + 1] = arr[i + 1]?.toUpperCase()
        else return letter
    })
    .filter(x => x)
    .join('')

const splitSum = arr => {
    const result = [0, 0]
    arr.forEach(x => x > 0 ? result[0] += x : result[1] += x);
    return result
}

const firstLevel = () => {
    console.log(camelize("background-color"))
    console.log(camelize("list-style-image"))
    console.log(camelize("-webkit-transition"))
    console.log(camelize("-aA---"))
}

const secondLevel = () => {
    let [res01, res02] = splitSum([1, -2, 3, 4, -9, 6])
    console.log(res01, res02)
    const rndArr = [...Array(1000000)].map(x => Math.floor(Math.random() * 201) - 100);
    [res01, res02] = splitSum(rndArr)
    console.log(res01, res02)
}

firstBtn.addEventListener('click', () => firstLevel())
secondBtn.addEventListener('click', () => secondLevel())