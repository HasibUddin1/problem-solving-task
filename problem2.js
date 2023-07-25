const numbers = [2, -5, 10, -3, 7]

function addPositiveNumbers(array) {
    const positiveNumbers = array.filter(number => number > 0)

    const sum = positiveNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return sum
}

const result = addPositiveNumbers(numbers)
console.log(result)