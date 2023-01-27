import ProductItem from "../../components/ProductItem";
import { iteam_array } from "../../lib/data";


export default function Product_list() {
  const onChange_select = document.querySelector("#onChange_select");
  console.log(onChange_select);

  // onChange_select.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  // })
  return (
    `    <div>
      <div class="text-center">
        <h2 class=" text-5xl mt-9 p-2 mb-2 font-bold">Our Popular Dishes
        </h2>
        <p class=" mt-3 mb-11 font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br/>
        labore et dolore magna aliqut enim ad minim</p>

      </div>
      <div>
        <select id="onChange_select" class="my-4 border-[1px] border-solid border-gray-700 py-3 pl-1  block rounded-lg min-w-[170px] " onchange="">

            <option value="all">Tất cả</option>
            <option value="1">Giá trên 30$</option>
            <option value="2">Giá dưới 30$</option>
        </select>
      </div>
       ${ProductItem(iteam_array, true)}
    </div>`
  )
}
