import { router, useEffect, useState } from "../lib"
import { number, object, string } from "yup"
import axios from "axios"
const schemaValidate = object({
    name: string().required(),
    price: number().required(),
    quantity: number().required(),
    desc: string().required(),
})
export default function EditProduct({ id }) {
    const [item, setItem] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id).then(data => setItem(data.data))
    }, [])
    useEffect(() => {
        const name = document.getElementById("name")
        const image = document.getElementById("image")
        const price = document.getElementById("price")
        const quantity = document.getElementById("quantity")
        const desc = document.getElementById("desc")
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            const post = {
                id,
                name: name.value,
                image: image.value,
                price: price.value,
                quantity: quantity.value,
                desc: desc.value
            }
            schemaValidate.validate(post, { abortEarly: false })
                .then(() => {
                    axios.put("http://localhost:3000/products/" + id, post)
                        .then(() => {
                            alert("Sửa thàh công")
                            router.navigate("/admin/products")
                        });
                }).catch(({ errors }) => {
                    console.log(errors)
                })

        })
    })
    return (
        ` <form class="container">
            <h3 class="text-center">Edit Products</h3>
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" value="${item.name}" id="name" class="form-control" placeholder="" />

            </div>
            <div class="mb-3">
                <label for="" class="form-label">Image</label>
                <input type="text" value="${item.image}" id="image" class="form-control" placeholder="" />

            </div>
            <div class="mb-3 w-2/3 overflow-hidden h-14"><img class="object-cover"  src="${item.image}"></img></div>
            <div class="mb-3">
                <label for="" class="form-label">Price</label>
                <input type="text" value="${item.price}" id="price" class="form-control" placeholder="" />

            </div>
            <div class="mb-3">
                <label for="" class="form-label">Quantity</label>
                <input type="text"value="${item.quality}"  id="quantity" class="form-control" placeholder="" />

            </div>
            <div class="mb-3">
                <label for="" class="form-label">Description</label>
                <input type="text"value="${item.description}"  id="desc" class="form-control" placeholder="" />

            </div>
            <button class="btn btn-success">Edit</button>

        </form>`
    )

}
