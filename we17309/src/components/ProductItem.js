import Button from "./Button";

export default function ProductItem(listproduct, icon = false) {
    return (
        ` <div class="grid grid-cols-3  gap-y-7 gap-x-5">
          
               ${listproduct?.map(item => (`
              <div>
                  <div class="rounded-2xl bg-cover w-fit overflow-hidden">
                      <a href="/products/${item.id}"><img src="${item.image}"/> </a>
                  </div>
                  ${icon ===true? `<p class="text-red-500 py-4 text-[20px]">
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
                </p>`: `<p class="text-slate-900 hover:text-red-500 flex-1 py-4 text-[20px] min-h-[92px]">
                ${item.name}
                    </p>
                    ${Button("Add to cart", ["text-center", "text-white", "bg-green-500 min-w-full py-2"])}`}
                        
              </div>`)).join("")}
           </div>`
    )
}
