import ProductItem from "../../components/ProductItem";
import useState from "../../Hook/useState";
import { iteam_array } from "../../lib/data";


export default function Product_list() {
  let [itemPrice, setItemPice] = useState(iteam_array);
  // const [select, setChangeSelect] = useState("all");

  const priceOver30 = iteam_array?.filter(item => item.price > 30);
  // console.log(priceOver30)
  const priceUnder30 = iteam_array?.filter(item => item.price < 30);
  const loadProduct = () => {

    document.addEventListener("DOMContentLoaded", () => {
      const select = document.querySelector("#onChange_select");
      select?.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        // do something with the selected value
      
        if (selectedValue == 1) {

          setItemPice(priceOver30)

          return ProductItem(itemPrice(), true)

        }
        else if (selectedValue == 2) {
          setItemPice(priceUnder30)
          console.log(itemPrice())
          return ProductItem(itemPrice(), true)

        }
        else {
          return ProductItem(itemPrice(), true)
        }
        return ProductItem(itemPrice(), true)
      });
    })

  }
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
      ${loadProduct()}
        
    </div>`
  )
}
