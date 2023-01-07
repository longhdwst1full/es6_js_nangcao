

export default function array_method() {
    const product = ['a', 'b', 'c', 'd', 'e', 'f'];
    for (let index = 0; index < product.length; index++) {
        console.log("for ", product[index]);
        // dựa vào index để hiển thị và biết điềm dừng, dựa vào lenght

    }
    // for in 
    // bắt theo index 
    for (const key in product) {
        console.log("for in ", product[key]);
    }
    // for of
    // bắt theo value
    for (const item of product) {
        console.log("for of ", item);
    }

    // foreach 
    product.forEach((item, index) =>
        console.log(`foreach item  ${item} + index: ${index}`)
    );


    // map tạo ra 1 mảnh mới và có thể thay đổi giá trị 
    const newProduct = product.map((item, index) => `${item} ahihi`)
    console.log("map ", newProduct);

    // filter
    const newProductByFilter = product.filter(item => item !== 'a');
    console.log(newProductByFilter);

    // reduce
    const numbers2 = [
        { id: 1, name: "Product A", price: 200 }, // accumulator
        { id: 2, name: "Product B", price: 300 },
        { id: 3, name: "Product C", price: 400 },
    ];
    // accumulator : nếu có giá trị khởi tạo =0 và nó là tổng tạm thời 
    // accumulator = 0+200
    // accumulator = 200+300

    const total = numbers2.reduce((accumulator, nextValue) => accumulator + nextValue.price, 0);

    // Find -> Tìm phần tử trong mảng -> trả về 1 phần tử thỏa mãn điều kiện
    const products2 = [
        { id: 1, name: "Product A", price: 200 }, // item
        { id: 2, name: "Product B", price: 300 }, // item
        { id: 3, name: "Product C", price: 400 }, // item
    ];

    const foundProduct = products2.find((item) => item.id == 2);
    console.log(foundProduct);

}


