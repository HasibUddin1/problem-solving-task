function calculator(number1, number2, operator) {
    if (operator === '+') {
        return number1 + number2
    }
    else if (operator === '-') {
        return number1 - number2
    }
    else if (operator === '*') {
        return number1 * number2
    }
    else if (operator === '/') {
        if (number2 === 0) {
            throw new Error('Cannot divide by zero')
        }
        return number1 / number2
    }
    else {
        throw new Error("Invalid Operator. Please use +, -, *, /")
    }
}

const number1 = 5
const number2 = 5
const operator = '/'

const result = calculator(number1, number2, operator)
console.log(result)