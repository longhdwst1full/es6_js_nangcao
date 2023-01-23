import { menu } from "../lib/data";


export default function Nav() {
  return (
`    <nav>
      ${menu.forEach(item =>`<li><a href="/${item.path}">${item.name}</a></li>`)}
    </nav>`
  )
}
