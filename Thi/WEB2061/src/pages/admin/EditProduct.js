import axios from "axios"
import { number, object, string } from "yup"
import { router, useEffect, useState } from "../../lib"
const schemaValidate = object({
    name: string().required(),
    image: string().required(),
    price: number().required(),
    quality: number().required(),
    description: string().required()
})
export default function EditProduct({ id }) {

    const [products, setProducts] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(data => {
                console.log(data);
                setProducts(data.data)
            })

    }, [])

    useEffect(() => {
        const name = document.getElementById("name")
        const image = document.getElementById("image")
        const price = document.getElementById("price")
        const quanlity = document.getElementById("quanlity")
        const desc = document.getElementById("desc")
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            const product = {
                id,
                name: name.value,
                image: image.value,
                price: price.value,
                quanlity: quanlity.value,
                description: desc.value
            }

            // try {
                // schemaValidate.validate(product, { abortEarly: false })
                //     .then(() => {

                        axios.put(`http://localhost:3000/products/${id}`, product)
                            .then(() => {
                                alert("Sửa thành công");
                                router.navigate("/admin")
                            })
                    // })

            // } catch ({ errors }) {
            //     console.log(errors);
            // }
        })
    })

    return (
        `<div class="container">
            <h3>Edit Products</h3>
            <form>
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" value="${products.name}" id="name" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Image</label>
                    <input type="text" value="${products.image ? products.image : ""}" id="image" class="form-control" placeholder="" />

                </div>
                <div class="w-2/3">
                    <img style="width: 100%;" src="${products.image}"/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Price</label>
                    <input type="text" value="${products.price ? products.price : ""}" id="price" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Quanlity</label>
                    <input type="text" value="${products.quanlity ? products.quanlity : ""}" id="quanlity" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <input type="text" value="${products.description}" id="desc" class="form-control" placeholder="" />

                </div>
                <button class="btn btn-success">Eidt</button>
            </form>
        </div>`
    )
}
