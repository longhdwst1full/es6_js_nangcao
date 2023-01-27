import Button from "./Button";
import Nav from "./Nav";

export default function header() {
  return (`
    <div class="w-[1200px] m-auto flex items-center justify-around h-16 mb-2">
      <div class="">
       <a href="/"> <img titile="" src="https://longhdwst1full.github.io/web_ban_hang/images/icon/Logo.png"/></a>
      </div>

      ${Nav()}
      
      <div class="flex items-center">
       <img src="https://longhdwst1full.github.io/web_ban_hang/images/icon/Cart.png" class="mr-3"/>
        ${Button("Sign In", ["px-3 py-2  font-semibold","border-[1px] border-red-700" ,"text-red-600", "bg-white-100","mr-2 rounded-lg"])}
        ${Button("Sign Up", ["px-3 py-2  font-semibold","border-red-600", "border-solid" ,"text-white","bg-red-600 rounded-lg"])}
      </div>
    </div>`
  )
}
