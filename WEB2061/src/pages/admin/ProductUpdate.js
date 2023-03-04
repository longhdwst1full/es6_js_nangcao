import { router, useEffect, useState } from "../../lib"
import axios from "axios"
import UpImg from "../../components/UpImg";
const ProductUpdate = ({ id }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(({ data }) => setProduct(data))
    }, []);
    useEffect(() => {
        const formUpdate = document.querySelector("#form-update");
        const name = document.querySelector("#namePro");
        const cate = document.querySelector("#catePro");
        const desc = document.querySelector("#descPro");
        const img = document.querySelector("#imgPro");
        const price = document.querySelector("#pricePro");
        formUpdate.addEventListener("submit", async (e) => {
            e.preventDefault();
            let images = ""
            images = img.files.length > 0
                ? await UpImg(img.files)
                : img.accept;
            const newProduct = {
                id,
                name: name.value,
                categories: cate.value,
                description: desc.value,
                images,
                price: Number(price.value)
            }
            axios.put(`http://localhost:3000/products/${id}`, newProduct)
                .then(() => router.navigate("/admin/list-product"))
                .catch(error => { console.error(error) });
        })
    })
    return /*html*/`
  <div class="container">
    <form id="form-update">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" id="namePro" value="${product.name}">
    </div>
    <div class="mb-3">
      <label class="form-label">Category</label>
      <input type="text" class="form-control" id="catePro" value="${product.categories}">
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <input type="text" class="form-control" id="descPro" value="${product.description}">
    </div>
    <div class="mb-3">
      <label class="form-label">Image</label>
      <input type="file" class="form-control" id="imgPro" accept="${product.images}">
      <img src="${product.images}" class="tw-w-[90px] tw-h-[90px] tw-rounded tw-border tw-my-2">
    </div>
    <div class="mb-3">
      <label class="form-label">Price</label>
      <input type="text" class="form-control" id="pricePro" value="${product.price}">
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
  </form>
  </div>
  `
}

export default ProductUpdate