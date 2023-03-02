import axios from 'axios'
import { router, useEffect } from '../lib'

export default function Signin() {
    useEffect(() => {
        const email = document.getElementById("email");
        const password = document.getElementById("password")
        document.querySelector('form').addEventListener('submit', async(e) => {
            e.preventDefault()
            const user = {
                email: email.value,
                password: password.value
            }

            try {
                const response = await axios.post('http://localhost:3000/login', user)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                alert('Sign In successfully🎉')
                router.navigate('/admin/products')  
            } catch ({ errors }) {
                console.log(errors);
                alert('Sign In failed😭: ' + errors)
            }
        })
    })
    return (
        `     <div class="container">

                <form>
                <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" name="" id="email" placeholder="abc@mail.com" />
                <small id="emailHelpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" class="form-control" name="" id="password" placeholder="" />
            </div>
                    <button class="btn btn-success">Sign In</button>
                </form>
            </div>`
    )
}
