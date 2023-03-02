import 'bootstrap/dist/css/bootstrap.min.css'
import { render, router } from './lib';
import AddProducts from './pages/admin/AddProducts';
import EditProduct from './pages/admin/EditProduct';
import Products from './pages/admin/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/Sigup';


const app= document.querySelector("#app");

router.on("/admin",()=>render(Products,app))
router.on("/admin/products/add",()=>render(AddProducts,app))
router.on("/admin/:id/edit",({data})=>render(()=>EditProduct(data),app))


router.on("/signin",()=>render(SignIn,app))
router.on("/signup",()=>render(SignUp,app))

router.on("/admin/*",()=>{},{

    before:(next)=>{
        const userId=JSON.parse(localStorage.getItem("user"))
        
        if(!userId||userId.id!=1) return window.location.href="/"
        next()
        
    }
})
router.resolve()
router.notFound(()=>{
    alert("Không tìm thấy page")
})