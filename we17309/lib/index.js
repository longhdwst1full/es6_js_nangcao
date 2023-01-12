import Navigo from "navigo"

export const router = new Navigo("/", { linksSelector: "a", hash: true });

export const render = (content, container) => {
    container.innerHTML = content()
}


