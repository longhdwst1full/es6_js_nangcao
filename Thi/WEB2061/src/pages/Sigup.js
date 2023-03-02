import axios from "axios"
import { router, useEffect } from "../lib"

export default function SignUp() {
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
        axios.post("http://localhost:3000/register", user)
          .then(() => {

            alert("Đăng lí thành công")
            router.navigate("/signin")
          })
      })
    }
  })
  return (
    ` <div class="container">
      <form>
      <h3 class="">Sign Up</h3>
        <div class="mb-3">
          <label for="" class="form-label">Email</label>
          <input type="email" class="form-control" name="" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com"/>
          
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Password</label>
          <input type="password" class="form-control" name="" id="password" placeholder=""/>
        </div>
        <button class="btn btn-success">Sign UN</button>
      </form>
    </div>`
  )
}
