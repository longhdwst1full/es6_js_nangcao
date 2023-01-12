
export default function rest_param() {
    //   rest tạo ra 1 mảng mới 
    function total(...rest) {
        let result = 0;
        for (let i = 0; i < rest.length; i++) {
            result += rest[i];

        }
        console.log("rest param : ", rest)
        console.log("result : ", result)
    }
    total(1, 2, 3)
    function show({ a, b, ...other }) {
        console.log(a); // 1
        console.log(b); // 2
        console.log(other); // { c: 3, d: 4}
    }
    show({ a: 1, b: 2, c: 3, d: 4 });
}
