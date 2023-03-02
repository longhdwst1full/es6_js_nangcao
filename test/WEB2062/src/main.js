import 'bootstrap/dist/css/bootstrap.min.css'
import AddProduct from './admin/AddProduct';
import EditProduct from './admin/EditProduct';
import Products from './admin/Products';
import { render, router } from './lib';
import Signin from './page/signin';
import SignUp from './page/SignUp';

const app = document.querySelector("#app");

router.on("/register", () => render(SignUp, app))
router.on("/login", () => render(Signin, app))

router.on("/admin/*", () => { }, {
    before: (next) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || (user && user.id != 1)) return window.location.href = '/login';
        next();
    }
})
router.on("/admin/products", () => render(Products, app))
router.on("/admin/add", () => render(AddProduct, app))
router.on("/admin/:id/edit", ({ data }) => render(() => EditProduct(data), app))
router.notFound(() => { alert("Không tìm thấy page") })

router.resolve()