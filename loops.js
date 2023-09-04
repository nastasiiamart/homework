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

// let num = 10;
// while (num <= 7) {
//     console.log(num)
//     num++;
// }

// do {
//     console.log(num)
//     num++
// } while (num <= 10)

// let sumOfLoop = 0;
// for (let i = 0; i <= num; i+=2) {
//     console.log(i)
//     if (i == 6) break;
//     sumOfLoop += i;
// // }

// for (let i = 0; i <= num; i+=2) {
//     if (i == 6) continue
//     console.log(i)
//     sumOfLoop += i;
// }

// console.log(sumOfLoop)

// for in // objects
// for of // arrays

// const obj1 = {prop1:1, prop2:2, prop3:'value3'}
// for (let prop in obj1) {
//     console.log(prop)
//     console.log(`${obj1[prop]}`)
//     if(`${obj1[prop]}`== 'New') {
//         console.log
//     }
// }

// const arr1 = ['valar1', 'valarr2', 'valarr3']

// for ( let valOfArr of arr1 ) {
//     valOfArr += 1
//     console.log(valOfArr)
// }

// for (let i = 0; i < 3; i++) {
//     console.log( 'number ${i}!' )
// }


let i = 0;
while (i < 3) {
    console.log('number ${i}!');
    i++;
}

let NotDivide;
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) continue
    NotDivide = i;
    console.log(NotDivide)
}

for (let i = 0; i <= 10; i++) {
    if (i == 5) continue
    console.log(i)
}

let num = 10
if (num < 10) {
    console.log('Hello')
}
else {
    console.log('Bye')
}

