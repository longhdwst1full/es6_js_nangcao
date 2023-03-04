import axios from "axios";
import { useEffect, useState } from "../../lib";
const ListProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(({ data }) => setProducts(data))
  }, [])

  //xóa product
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-remove')
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const confirmDel = window.confirm('Are you sure you want to remove this product?');
        if (confirmDel) {
          axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => {
              const newProduct = products.filter(p => p.id != id);
              setProducts(newProduct);
            }).catch(error => { console.error(error) });
        }
      })
    }
  })


  return /*html*/`
  <div class="container">
  <div><a href="/admin/add-product" class="btn btn-primary">Add Product</a></div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Description</th>
        <th scope="col">Images</th>
        <th scope="col">Regular Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    ${products.map((product, i) => {
    return /*html*/`
      <tr>
      <th scope="row">${i + 1}</th>
      <td>${product.name}</td>
      <td>${product.categories}</td>
      <td>${product.description}</td> 
      <td><img src="${product.images}" class="tw-w-[70px] tw-h-[70px] tw-rounded tw-border"></td>
      <td>${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
      <td>
      <button data-id="${product.id}" class="btn btn-danger btn-remove">Xóa</button>
      <a href="/admin/edit-product/${product.id}" class="btn btn-warning">Sửa</a>
      </td>
    </tr>`
  }
  ).join('')}
     
    </tbody>
  </table>

  
  </div>`
}

export default ListProduct