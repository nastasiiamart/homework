

let arr1 = ['kili', 'ooo', 'p0dp', 938, 2222, true, function() {console.log('Hi from array')}]

// let value = arr1[3]
// console.log(value)

arr1[3] = 'New'
// console.log(arr1[3])
// console.log(arr1)

// arr1[6]()

// let lArr1 = arr1.length
// console.log(lArr1)
// console.log(arr1.at(-3))


async function getOnlyString(baseArr) {
let result = []; 
resultWithUpperC = [];

for (let i = 0; i < baseArr.length; i++) {
    // console.log(arr1[i])
    
    if (typeof baseArr[i] === 'string') {
        await result.push(baseArr[i])
    }
}

for (let y = 0; y < result.length; y++) {
    let word = result.at(y)
    let firstLetter = await String(word[0]).toUpperCase()
    let restLetters = await String(word.slice(1))
    resultWithUpperC.push(firstLetter + restLetters)
}
console.log(resultWithUpperC)
}
getOnlyString(arr1)