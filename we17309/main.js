


// // alt shift + o : format theo abc
// // import file 

import { render, router } from "./src/lib/data";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Home from "./src/pages/Home";
import Prodcuts from "./src/pages/Prodcuts";
import ProductDetail from "./src/pages/ProductDetail";

const app = document.querySelector('#app');

render(Home, app);


router.on("/", () => render(Home, app));
router.on("/about", () => render(About,app))

router.on("/contact", () => render(Contact, app));
router.notFound(() => console.log("Not found"));

router.on("/products", () => render(Prodcuts, app));
router.on("/products/:id", (param ) => render(ProductDetail(param.id), app));

router.resolve();