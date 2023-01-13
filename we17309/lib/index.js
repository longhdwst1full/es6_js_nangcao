import Navigo from "navigo"

export const router = new Navigo("/", { linksSelector: "a", hash: true });

export const render = (content, container) => {
    if (typeof content === "string") {

        container.innerHTML = content
    }
    else {
        container.innerHTML = content()
    }
}


