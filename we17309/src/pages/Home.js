
import Footer from "../components/Footer";
import header from "../components/header";
import banner from "./Content/banner";
import Categories from "./Content/Categories";
import Contact from "./Content/Contact";
import Product_list from "./Content/Product_list";

export default function Home() {
  return (
    `    <div class="w-[1200px] m-auto">
      ${header()}
      
      <div class="content">
       
      ${banner()}
      
      ${Product_list()}

      ${Categories()}

      ${Contact()}
      </div>


      ${Footer()}

   </div>`
  )
}
