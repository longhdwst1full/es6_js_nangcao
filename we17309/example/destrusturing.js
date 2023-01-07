const person = {
    personname: 'Dat',
    age: 13,
    address: {
        street: 'Phuong canh ',
        city: 'HN'
    }
}

const { personname, age, address: { city } } = person
console.log(personname, city)

function useState(initialState) {
    let state = initialState;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return [getState, setState];
}
const [count, setCount] = useState(0);
console.log("count", count());
setCount(20);
console.log("count", count());
import rest_param from "./rest-param";
import spread_operator from "./spread-operator"
import array_method from "./array_method";
spread_operator()
array_method();
rest_param();