import Button from "../components/Button";
import Footer from "../components/Footer";
import header from "../components/header";
import ProductItem from "../components/ProductItem";
import { iteam_array } from "../lib/data";


export default function ProductDetail(id) {
  const id_param = iteam_array.find(item => item.id == id);
  return (
    `    <div class="w-[1200px] m-auto">
      ${header()}
    <div class="grid my-10 grid-cols-2 gap-x-5">
    ${id_param && `  
    <div class="">
              <h3 class="mb-2 text-4xl font-bold  p-1">${id_param.name}</h3>
              <p class="font-semibold text-red-500 py-3 text-3xl">${id_param.price} $</p>
              <p class="text-gray-700">${id_param.desc}</p>

              <form class="mt-4 border-[1px] border-solid max-w-fit rounded-lg border-green-700 overflow-hidden ">
              <input placeholder="Số lượng" class="outline-none boder-none p-2 " />
              ${Button("Quantity",["rounded-lg p-2","bg-green-500"])}
              </form>
           </div>
        <div class="w-full overflow-hidden">
           <img class="w-full-image w-full rounded-lg" src="${id_param.image}"/>
        </div>

    </div>
        `}

        ${ProductItem(iteam_array)}
      ${Footer()}
    </div>`
  )
}
