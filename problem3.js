const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5]

function findMostFrequentElement(array) {
    let frequencyMap = {}

    array.forEach(element => {
        if (frequencyMap[element]) {
            frequencyMap[element]++
        }
        else {
            frequencyMap[element] = 1
        }
    })

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in frequencyMap) {
        if(frequencyMap[element] > maxFrequency){
            mostFrequentElement = element
            maxFrequency = frequencyMap[element]
        }
    }
    return parseInt(mostFrequentElement)
}

const result = findMostFrequentElement(numbers)
console.log(result)