// const { assert } = require("console")



// function clickButton() {
//     console.log('Click the element')
//     frameworkPlaywright.clickTheButton()
// }

// let ownVariable1 = 'sss'

// function clickButton(selector, text='Hello') {
//     console.log('Click the element')
//     // frameworkPlaywright.clickTheButton(selector)
//     // assert txtOnUI == text
//     let ownVariable2 = 'local value'
//     return ownVariable2
// }

// let valueFromFunction = clickButton()
// console.log(valueFromFunction)

const path = './values.json';
const fs =  require('fs-extra');

async function func1() {
    let ddd = await JSON.parse(fs.readFileSync(path, 'utf-8'))
    console.log(ddd)
    console.log('Hello from asynk function')
    ddd.dkd = 'DKD'
    await fs.writeFile(path, JSON.stringify(ddd))
}

func1();
