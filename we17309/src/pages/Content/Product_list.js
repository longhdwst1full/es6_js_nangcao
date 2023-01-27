import { ListCategory, iteam_array } from "../../lib/data";

export default function Product_list() {
    return (
        `    <div>
      <div class="text-center">
        <h2 class=" text-5xl mt-9 p-2 mb-2 font-bold">Our Popular Dishes
        </h2>
        <p class=" mt-3 mb-11 font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br/>
        labore et dolore magna aliqut enim ad minim</p>

      </div>
      <div>
        <select class="my-4 border-[1px] border-solid border-gray-700 py-3 pl-1  block rounded-lg min-w-[170px] ">
            <option>Lọc giá</option>
            <option>1</option>
            <option value="1">1</option>
            <option value="2">1</option>
            <option value="3">1</option>
        </select>
      </div>
      <div class="grid grid-cols-3  gap-y-7 gap-x-5">
        

        ${iteam_array.map(item => (`
        <div>
            <div class="rounded-2xl bg-cover w-fit overflow-hidden">
                <img src="${item.image}"/> 
            </div>
            <p class="text-red-500 py-4 text-[20px]">
                ${item.name}
            </p>
            <p class="flex ">
                <span class="flex mr-3">
                    <img class="mr-1" src="https://longhdwst1full.github.io/web_ban_hang/images/icon/time.png">
                   <span class=""> 30 Minutes</span>
                
                    </span>
                    <span class="flex">
                        <img class="mr-1" src="https://longhdwst1full.github.io/web_ban_hang/images/icon/ForkKnife.png">
                        <span>Snack</span>
                    </span>   
            </p>
        </div>

            `)).join("")}
        </div>
    </div>`
    )
}
