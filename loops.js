// let num215 = 215

// if (num215 == 215) {
//     console.log('yes, value under condition')
// }

// if (num215 >= 215 && num215 < 250) {
//     console.log('Second condition works')
// }

// if (num215 > 300) {
//     console.log('num215 varaible greater than 300')
// }

// else if (num215 >=250) {
//     console.log('num greater than 200')
// }

// else if (num215 >=200) {
//     console.log('num greater than 200')
// }

// else {
//     console.log('code goes to the else')
// }

//             (num215 >= 200) ? console.log('ternary true') : 
//             (num215 >= 250) ? console.log('ternary false') :
//             console.log('ternary false')

let num = 10;
// while (num <= 7) {
//     console.log(num)
//     num++;
// }

// do {
//     console.log(num)
//     num++
// } while (num <= 10)

let sumOfLoop = 0;
for (let i = 0; i <= num; i+=2) {
    console.log(i)
    if (i == 6) break;
    sumOfLoop += i;
}

console.log(sumOfLoop)