import Navigo from "navigo"

export const router = new Navigo("/");

export const render = (content, container) => {
    container.innerHTML = content()
}


