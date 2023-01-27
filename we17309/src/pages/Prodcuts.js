import Button from "../components/Button";
import Footer from "../components/Footer";
import header from "../components/header";
import ProductItem from "../components/ProductItem";
import { iteam_array, ListCategory } from "../lib/data";

export default function Prodcuts() {
  return (
    `<div class="w-[1200px] m-auto">
          ${header()}
          
          <div class="flex my-10 ">
              <div class="mr-3"> 
                ${ListCategory.map(item=>(`<li data-id="${item.id}" class="hover:bg-gray-50 list-none text-lg p-2 hover:text-red-400 min-w-[170px]">${item.name}</li>`)).join('')}
                
              </div>
           ${ProductItem(iteam_array)}
          </div>
          ${Footer()}
      </div>`
  )
}
