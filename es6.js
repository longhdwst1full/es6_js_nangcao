
//destructuring Arrays

const listArray = ['long', 'an', 'ánh', ['hà', 'luong']];

let [long, , anh] = listArray;
let [, , , [ha]] = listArray
// console.log(ha);
// with default value
const [a, b, c = 1] = [8, 7]
// console.log(a, b, c);

// destructuring with objects
const user = {
    namePerson: 'John',
    age: 30,
    email: 'john@example.com'
};

const { namePerson, age, email } = user;

console.log(namePerson);  // Output: "John"
console.log(age);   // Output: 30
console.log(email); // Output: "john@example.com"
// default value object with destruturing
const people = {
    name: 'John',
    addresses: {
        city: 'Hà noi',
        hourse: 'số nhà 10'
    }
};

const { name, agePeople = 25, addresses: { city }, emailPeople } = people;

// console.log(name);  // Output: "John"
// console.log(agePeople);   // Output: 25 (default value)
console.log(emailPeople); // Output: undefined
console.log(city)

// the spread operator 

// with array
const color1 = ['red', 'green', 'blue'];

const newColors1 = ['yellow', ...color1, 'purple'];
console.log(newColors1); // Output: ['yellow', 'red', 'green', 'blue', 'purple']
console.log("spread ", ...newColors1)
// with object
const colors2 = ['red', 'green', 'blue'];

const newColors2 = ['yellow', ...colors2, 'purple'];

console.log(newColors2); // Output: ['yellow', 'red', 'green', 'blue', 'purple']


function showColors(a, b, c) {
    console.log(`mầu sắc : ${a} ,${b}, ${c}`);
}
let data = ['jjh', 'hhh', 'jh']
console.log(...data)
showColors(...data);


// rest : lấy phần còn lại 
function add(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;

    }
    return sum
}

console.log(add(1, 2, 3));  // Output: 6
console.log(add(1, 2, 3, 4));  // Output: 10


const numbers = [1, 2, 3, 4, 5];

const [first, second, ...others] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(others); // Output: [3, 4, 5]
// let root = document.querySelector(".root");
// let hedden =
//     document.querySelector(".hiden_")
// hedden.style.display = "none"
// let form = document.querySelector('.form');
// let name1 = document.querySelector('.name')
// let price = document.querySelector('.price')
// let df = document.querySelectorAll('.df')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let email = document.querySelector('.email')

//     root.innerHTML = `helo ${name1.value} ${price.value} `
//     name1.value=""
//     email.value=""
//     price.value=""
// })

// df.forEach(element => {
//     element.addEventListener('click', (e) => {
//         console.log(e.target.value);
//         if (e.target.value == 1) {
//             hedden.style.display = "block"
//         }
//         else{
//             hedden.style.display = "none"

//         }
//     })
// });
// console.log(df)


// toán tử ||
console.log(3 || 'jonas')
console.log("" || 'jonas')
console.log(undefined || 0 || "" || null || 'helo')


// toán tử && 


// ?? : use when biến bên trái có giá trị là null hoặc undefined 

function getUserName(user) {
  return user?.name ?? "Anonymous";
}

let user1 = { name: "John" };
console.log(getUserName(user1));  // "John"

let user2 = {};
console.log(getUserName(user2));  // "Anonymous"

let user3 = {name:0};
console.log(getUserName(user3));  // "Anonymous"

// (?.) để kiểm tra xem thuộc tính tên của đối tượng người dùng có được xác định hay không