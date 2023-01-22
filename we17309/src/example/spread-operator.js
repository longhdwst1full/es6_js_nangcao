// spreate-opreator => copy

export default function spread_operator() {


    // shalow copy and deep copy
    // const person = {
    //     name: 'John',
    //     age: 34,
    // }
    // const person2 = {
    //     ...person,
    //     address: "HN"
    // }
    const person = {
        name: "Dat",
        age: 20,
        child: {
            name: "Tai",
        },
    };
    
    const person2 = {
        ...person,
        address: "Thai Binh",
    };
    // // spread-operator -> copy
    // const person2 = {
    //     ...person,
    //     address: "Thai Binh",
    // };
    
    // // Object assign
    // const person2 = Object.assign({ address: "Thai Binh" }, person);
    
    // const person2 = JSON.parse(JSON.stringify(person));
    const person3 = structuredClone(person);
    person2.child.name = "Kien";
    
    console.log(person2);
    console.log("person 1", person);
    console.log("person 2", person2);
    const number = [1, 2, 3, 4, 5, 6, 7, 8]
    // tính bất biến trong js 
    const numberAdd = [-1, ...number, 10];
    console.log("number add : ", numberAdd);
    const newNumberAdd = numberAdd.filter(item => item !== 5);
    console.log("number !5 : ", newNumberAdd);
}