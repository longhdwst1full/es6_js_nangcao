import { router, useEffect } from "../../lib"
import axios from "axios";
import UpImg from "../../components/UpImg";
const ProductAdd = () => {
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const name = document.querySelector("#namePro");
    const cate = document.querySelector("#catePro");
    const desc = document.querySelector("#descPro");
    const img = document.querySelector("#imgPro");
    const price = document.querySelector("#pricePro");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const images = await UpImg(img.files)
      const product = {
        name: name.value,
        categories: cate.value,
        description: desc.value,
        images,
        price: Number(price.value)
      }
      axios.post("http://localhost:3000/products", product)
        .then(() => router.navigate("/admin/list-product")).catch(error => { console.error(error) });
    })
  })
  return /*html*/ ` <div class="container">
    <form id="form-add">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" id="namePro">
    </div>
    <div class="mb-3">
      <label class="form-label">Category</label>
      <input type="text" class="form-control" id="catePro">
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <input type="text" class="form-control" id="descPro">
    </div>
    <div class="mb-3">
      <label class="form-label">Image</label>
      <input type="file" class="form-control" id="imgPro">
    </div>
    <div class="mb-3">
      <label class="form-label">Price</label>
      <input type="text" class="form-control" id="pricePro">
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
  </div>`

}

export default ProductAdd