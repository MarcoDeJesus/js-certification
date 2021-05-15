// var $ = require('jquery');

// console.log('Hello world');

// $(() =>{
//     $(document.body).append('<div>').text('hello wdebpack');
// });
class Person{
    constructor(name, age){
        Object.assign(this, {name, age});
    }
}

const man = new Person('walter white', 52);
const {name, age} = man;

console.log(`${name} is ${age} years old!`);

const view = require('raw-loader!jade-html-loader!../views/index.jade');
console.log(view);
document.body.innerHTML = view;