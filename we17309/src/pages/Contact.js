import Footer from "../components/Footer";
import header from "../components/header";
import contact_page from "./Content/Contact";

export default function Contact() {
    return (
        `    <div class="w-[1200px] m-auto">
      ${header()}
      <div >

      ${contact_page()}
    
      </div>
      ${Footer()}
    </div>`
    )
}
