function reverseString(string) {
    let reversedString = ''

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString
}
const inputString = 'hello world'

const output = reverseString(inputString)
console.log(output)