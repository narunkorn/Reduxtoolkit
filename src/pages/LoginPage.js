import { useState } from 'react'
import { useHistory } from "react-router-dom";



function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        const response = await fetch("http://localhost:8000/posts/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        })

        const responseData = await response.json();
        window.localStorage.setItem("access_token", responseData.data.token)
        window.localStorage.setItem("refresh_token", responseData.data.refresh.token)

    }

    function handleEmailChange(e) {
        setEmail(e.target.value)

    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleEmailChange}
                    value={email} />

                <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    onChange={handlePasswordChange}
                    value={password} />

                <button type="submit">Login </button>
            </form>
        </div>
    )
}
export default LoginPage