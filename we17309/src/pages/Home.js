
import Button from "../components/Button";
import Footer from "../components/Footer";
import header from "../components/header";

export default function Home() {
  return (
    `    <div class="w-[1200px] m-auto">
      ${header()}
      
      <div class="content">
        <div class="grid grid-cols-2 gap-5 pt-9 ">
          <div class="flex items-start px-4 justify-center flex-col">
            ${Button("Quality Food", ["rounded-lg ", "bg-[#FFEEEE]", "text-red-600 mb-[32px] px-4 py-3", "font-semibold"])}
            <h2 class="text-7xl font-bold">Fastest
               <br/>
                 <span class="text-red-500">
                  Delivery
                  </span>  &
                <br/> Easy 
                <span class="text-red-500">
                  Pickup
                </span>
            </h2>
            <p class="my-[32px] font-normal text-lg text-[#5D5D5D]">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes
            </p>

            <form action="">
                        <div class="border-[1px] border-red-700 rounded-lg overflow-hidden">
                            <input type="text" name="" class="p-3 min-w-max outline-none " placeholder="Enter your delivery location">
                            ${Button("Discover",["text-red-600","rounded-lg p-3 px-5 text-white","bg-red-500"])}
                        </div>
          </form>
          </div>

          <div>

            <img src="https://longhdwst1full.github.io/web_ban_hang/images/imageHome/Images.png" />
          </div>

        </div>

        
      </div>


      ${Footer()}

   </div>`
  )
}
