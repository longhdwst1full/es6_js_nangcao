import { menus } from "../data/projectFake";


export default function Nav() {
  return (

    `  <nav class="w-full text-center">
    ${menus?.map(menu => `<a class="p-2 text-green-500 text-xl"  href="${menu.link}">${menu.name}</a>`).join('')}</a>
    </nav>
    `
    )
  }
  
  // <a class="p-2 text-green-500 text-xl" href="/about" >About</a>
  // <a class="p-2 text-green-500 text-xl" href="/posts" >Post</a>
  // <a class="p-2 text-green-500 text-xl" href="/projects" >Project </a>
  // <a class="p-2 text-green-500 text-xl" href="/contact" >Contact</a>