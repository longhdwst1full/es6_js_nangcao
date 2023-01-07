
// 1 biến 
let a = 10;
console.log(a);


const root = document.querySelector('#root');
let result = '';
let listArray = ['long', 'an', 'luong'];
listArray.forEach(element => {
    result += `<div>${element}</div>`
});

root.innerHTML = result;


// tham trị lấy thằng giá trị đó
// tham chiếu đến ô chứa đó 

const array = [];
array.push('long');

const person = {
    name: 'John',
};
person.age = 34;
console.log(person)


/**
     functionm name
 * function expression function 
 * arrow function 
 * IIFE
 * 
 */
function sum(a, b) {
    return a + b;
}
const sum1 = (a, b) => a + b;
const sum2 = function (a, b) {
    return a + b;
}