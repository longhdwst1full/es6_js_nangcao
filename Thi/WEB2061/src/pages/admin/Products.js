import { useEffect, useState } from "../../lib/index"
import axios from "axios";

export default function Products() {
    const [listProducts, setListProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/products").then(data => setListProducts(data.data))
    }, [])


    useEffect(() => {
        document.querySelectorAll(".btn_delete").forEach(item => {
            item.addEventListener("click", (e) => {
                const a = confirm("Bạn có thực sự muốn xóa không")
                const id = e.target.getAttribute("data-id");
                if (a) {
                    setListProducts(listProducts.filter(product => product.id != id));
                    axios.delete(`http://localhost:3000/products/${id}`).then(() => {
                        alert("Xóa thành công")
                    })
                }

            })
        })
    })
    return (
        `<div class="container">
      <h2>List Products</h2>
      <div class="">
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">Name </th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quanlity</th>
                    <th scope="col">Description</th>
                    <th cospan="2" scope="col">
                        <a class="btn btn-success" href="/admin/products/add">Add</a>
                    </th>
                </tr>
            </thead>
            <tbody>
               ${listProducts.map(product => (`<tr class="">
                    <td scope="row">${product.name}</td>
                    <td><img style="width:100px height:100px" src="${product.image}"/></td>
                    <td>${product.price}</td>
                    <td>${product.quanlity}</td>
                    <td>${product.description}</td>
                    <td>
                    <a href="/admin/${product.id}/edit" class="btn btn-warning">Edit</a></td>
                    <td><button data-id="${product.id}" class="btn btn-danger btn_delete">Edit</button></td>
                 
                </tr>`
        )).join('')}
            </tbody>
        </table>
      </div>
      
    </div>`
    )
}
