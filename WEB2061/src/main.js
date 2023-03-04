import 'bootstrap/dist/css/bootstrap.min.css'
import { router, render } from "./lib";

import ListProduct from './pages/admin/ListProduct';
import ProductAdd from './pages/admin/ProductAdd';
import ProductUpdate from './pages/admin/ProductUpdate';
import HomePage from './pages/HomePage';

const app = document.querySelector("#app");

// router.on("/", () => { render(HomePage, app) })
router.on("/", () => render(HomePage, app))
router.on("/admin/list-product", () => render(ListProduct, app))
router.on("/admin/add-product", () => render(ProductAdd, app))
router.on("/admin/edit-product/:id", ({ data }) => render(() => ProductUpdate(data), app))
router.notFound(() => console.log("Not found this page"));
router.resolve();