function randomPasswordGenerator(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars

    let password = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password += allChars[randomIndex]
    }

    return password
}

const password = 12

const randomPassword = randomPasswordGenerator(12)
console.log(randomPassword)