import axios from "axios"
import { useEffect } from "../lib"

export default function SignIn() {
    useEffect(() => {
        {
            const email = document.getElementById("email")
            const password = document.getElementById("password")
            document.querySelector("form").addEventListener("submit", (e) => {
                e.preventDefault()
                const user = {
                    email: email.value,
                    password: password.value

                }
                axios.post("http://localhost:3000/login", user)
                    .then((data) => {
                        localStorage.setItem("user", JSON.stringify(data.data.user))
                        alert("Đăng nhập thành công")
                        router.navigate("/admin")
                    })
            })
        }
    })
    return (
        ` <div class="container">
      <form>
      <h3>Sign In</h3>
        <div class="mb-3">
          <label for="" class="form-label">Email</label>
          <input type="email" class="form-control" name="" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com"/>
          
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Password</label>
          <input type="password" class="form-control" name="" id="password" placeholder=""/>
        </div>
        <button class="btn btn-success">Sign IN</button>
      </form>
    </div>`
    )
}
