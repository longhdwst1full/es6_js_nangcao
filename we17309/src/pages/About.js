import Footer from "../components/Footer";
import header from "../components/header";
import ProductItem from "../components/ProductItem";
import { iteam_array } from "../lib/data";

export default function About() {
  return (
    `   <div class="w-[1200px] m-auto">
    ${header()}
    ${ProductItem(iteam_array)}

      ${Footer()}
    </div>`
  )
}
