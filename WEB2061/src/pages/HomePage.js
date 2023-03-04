import { useEffect, useState } from "../lib";
import axios from "axios";
const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(({ data }) => setProducts(data))
    }, [])
    console.log(products);
    return /*html*/`
  <div class="tw-bg-[#dff5e5]">
 <header>
 <ul>
 <li> <a href="Products" class="tw-no-underline tw-text-[#222]">Products</a>
 </li>
 </ul>
 </header>
 <div class="tw-grid tw-grid-cols-4 tw-gap-4 container">
 ${products.map(product => {
        return /*html*/`
        <div class="show-products">
        <div class="img-product tw-overflow-hidden tw-rounded-md">
        <img src="${product.images}" class="tw-w-full tw-h-[300px]">
        </div>
        <div class="content-products">
        <p class="tw-mt-4">${product.description}</p>
        <div>
        <a href="#">${product.name}</a> <span>|</span> <a href="#">${product.categories}</a>
        </div>
        <span>${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
        </div>
        </div>
    `
    }).join("")}
 
 </div>
  </div>
  `;
}

export default HomePage