
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
}
