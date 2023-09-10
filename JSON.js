// const values = require('./values.json')
const fs = require('fs-extra')

// let jsonObj1 = '{"name": "ana", "lname": "pavliuk", "age": 100500}'

// let obj2 = JSON.parse(jsonObj1)

// console.log(obj2.name)

// obj2.city = "York"

// console.log(obj2)

// jsonObj1 = JSON.stringify(obj2)

// console.log(values)

function Func() {
   fetch('./values.json')
   .then((res) => {
    return res.json();
   })
   .then((data) => console.log(data));
}
Func()

// fs.writeFile(path, JSON.stringify(newData));
