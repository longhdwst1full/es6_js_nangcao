import Footer from "../components/Footer";
import header from "../components/header";
import Product_list from "./Content/Product_list";

export default function About() {
  return (
    `   <div class="w-[1200px] m-auto">
    ${header()}
     ${Product_list()}
      ${Footer()}
    </div>`
  )
}
