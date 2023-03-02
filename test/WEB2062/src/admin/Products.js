import axios from 'axios';

import { useEffect, useState } from '../lib'

export default function Products() {
    const [listproducts, setListProudcts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then(data => setListProudcts(data.data));
    }, [])

    useEffect(() => {
        document.querySelectorAll(".btn_delete").forEach(item => {
            item.addEventListener("click", (e) => {
                const a= confirm("Bạn có thực sự muốn xóa")
                if(a){

                    const id = e.target.getAttribute("data-id");
                    setListProudcts(listproducts.filter(product => product.id != id));
                    axios.delete("http://localhost:3000/products/" + id).then(() => { alert("Xóa thành công") })
                }
            })
        });
    })
    return (
        ` <div class="container">
      <h3>List products</h3>
      <div class="">
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col" colSpan="2"><a href='/admin/add'>Add product</a></th>
                </tr>
            </thead>
            <tbody>
                ${listproducts.map(product => (

            `  <tr class="">
                    <td scope="row">${product.name}</td>
                    <td><img src="${product.image}" class="w-2/3"/></td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>${product.description}</td>
                    <td><a class="btn btn-warning" href="/admin/${product.id}/edit/">Edit</a></td>
                    <td><button data-id="${product.id}" class="btn btn-danger btn_delete">Delete</button></td>
                </tr>`
        )).join('')}
                
            </tbody>
        </table>
      </div>
      
    </div>`
    )
}
