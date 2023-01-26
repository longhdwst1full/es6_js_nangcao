import {  menus } from "../lib/data";


export default function Nav() {
  return ` <nav>
      ${menus?.map(item =>`<a class="p-1 mr-2 text-zinc-700 hover:text-red-600 font-bold " href="${item.path}">${item.name}</a>`).join('')}
    </nav>`
}
