import { useState, useEffect, router } from "../lib/index"
import axios from "axios"
export default function SignUp() {
    useEffect(() => {
        const email = document.getElementById("email");
        const password = document.getElementById("password")

        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            const user= {
                email: email.value,
                password: password.value
            }
            axios.post("http://localhost:3000/register",user).then(() => {
                alert("Đăng kí thành công");
                router.navigate("/login")

            })
        })
    })
    return (
        `<form className="container m-auto">
            <h3>Đây lầ form đăng kí</h3>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" name="" id="email" placeholder="abc@mail.com" />
                <small id="emailHelpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" class="form-control" name="" id="password" placeholder="" />
            </div>
            <button class="btn btn-success">Đăng kí</button>
        </form>`
    )
}
