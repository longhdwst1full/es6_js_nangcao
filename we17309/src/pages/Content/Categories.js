import Button from "../../components/Button";
import { ListCategory } from "../../lib/data";

export default function Categories() {
  return (
`    <div class="my-10">
      <div class="flex mt-4 justify-between">
         <h2 class="text-4xl font-bold tracking-wide">Category</h2>
         ${Button("View all categories",["border-[1px] ","border-red-500 px-6 py-3","rounded-lg","text-red-500 font-semibold"])}
      </div>
      <div class="mt-3 flex justify-around pt-3 items-center">
        ${ListCategory.map(item=>(
            `
            <div class="text-center py-2">
               <a href="${item.id}"> <img src="${item.image}"/></a>
              <p class="my-2 font-semibold ">${item.name}</p>
            </div>
            `

        )).join("")}
      </div>
    </div>`
  )
}
