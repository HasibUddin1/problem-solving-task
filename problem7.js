function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanNumeralsMap[romanNumeral[i]]
        const nextValue = romanNumeralsMap[romanNumeral[i + 1]]

        if ((currentValue) && (currentValue < nextValue)) {
            total = nextValue - currentValue
            i++;
        }
        else {
            total += currentValue
        }
    }
    return total
}

const number8 = 'VIII'
const number21 = 'XXI'

const result1 = romanToInt(number21)

console.log(result1)
