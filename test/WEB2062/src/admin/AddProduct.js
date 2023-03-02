import { router, useEffect } from "../lib"
import { number, object, string } from "yup"
import axios from "axios"
const schemaValidate = object({
    name: string().required(),
    price: number().required(),
    quantity: number().required(),
    desc: string().required(),
})
export default function AddProduct() {
    useEffect(() => {
        const name = document.getElementById("name")
        const image = document.getElementById("image")
        const price = document.getElementById("price")
        const quantity = document.getElementById("quantity")
        const desc = document.getElementById("desc")
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            const post = {
                name: name.value,
                image: image.value,
                price: price.value,
                quantity: quantity.value,
                desc: desc.value
            }
            schemaValidate.validate(post, { abortEarly: false })
                .then(() => {
                    axios.post("http://localhost:3000/products", post)
                        .then(() => {
                            alert("Thêm thàh công")
                            router.navigate("/admin/products")
                        })
                })
                .catch(({ errors }) => {
                    alert('Add product failed😭: ' + errors)
                    console.log(errors);

                })

        })
    })
    return (
        `       <form class="container">
                <h3 class="text-center">Add Products</h3>
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" name="" id="name" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Image</label>
                    <input type="text" name="" id="image" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Price</label>
                    <input type="text" name="" id="price" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Quantity</label>
                    <input type="text" name="" id="quantity" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <input type="text" name="" id="desc" class="form-control" placeholder="" />

                </div>
                <button>Add</button>

            </form>`
    )
}
