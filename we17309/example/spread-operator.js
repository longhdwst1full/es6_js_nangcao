// spreate-opreator => copy

export default function spread_operator() {
 
    
    const person = {
    name: 'John',
    age: 34,
}
// shalow copy and deep copy
const person2 = {
    ...person,
    address:"HN"
}

const number = [1,2,3,4,5,6,7,8]
// tính bất biến trong js 
const numberAdd=[-1,...number,10];
console.log("number add : ",numberAdd);
const newNumberAdd=numberAdd.filter(item => item!==5);
console.log("number !5 : ",newNumberAdd);
}