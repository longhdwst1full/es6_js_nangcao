import { number, object, string } from "yup"
import { useEffect } from "../../lib"
const schemaValidate = object({
    name: string().required(),
    image: string().required(),
    price: number().required(),
    quality: number().required(),
    description: string().required()
})
export default function AddProducts() {

    useEffect(()=>{
const name= document.getElementById("name")
const image= document.getElementById("image")
const price= document.getElementById("price")
const quanlity= document.getElementById("quanlity")
const desc= document.getElementById("desc")
document.querySelector("form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const product={
        name: name.value,
        image: image.value,
        price: price.value,
        quanlity: quanlity.value,
        description:desc.value
    }
    
    try {
        schemaValidate.validate(pro)
    } catch (error) {
        
    }
})
    })

    return (
        `<div class="container">

            <h3>Add Products</h3>
            <form>
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
                    <label for="" class="form-label">Quanlity</label>
                    <input type="text" name="" id="quanlity" class="form-control" placeholder="" />

                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <input type="text" name="" id="desc" class="form-control" placeholder="" />

                </div>
                <button class="btn btn-success">Add</button>
            </form>
        </div>`
    )
}
