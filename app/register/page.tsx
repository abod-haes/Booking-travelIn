"use client"
import React, {FormEvent, useState} from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import {ToastContainer, toast} from "react-toastify"
import "./login.css"
import {AuthService} from "@/services"
import {useRouter} from "next/navigation"
import { Snipper } from "@/components"

const Page = () => {
    const route = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [isLoading, setLoading] = useState(false)
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email || !password || !name || !userId) {
            toast.error("please Fill all fields")
            return
        }

        const authService = AuthService.getInstance()
        const data = {userId, email, password, name}
        setLoading(true)
        authService
            .register(data)
            .then(res => {
                setLoading(false)
                toast.success("Registration Success")
                route.replace("/login")
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
                setLoading(false)
            })
    }

    return (
        <>
            <div className="login">
                <ToastContainer />
                <div className="popLogin" />

                <h2 className="logo">
                    Travel<span>In</span>
                </h2>
                <div className="form">
                    <h2>Register</h2>
                    <form onSubmit={handleLogin}>
                        <TextField
                            id="name"
                            label="name"
                            variant="outlined"
                            value={name}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <TextField
                            id="userId"
                            label="userName"
                            variant="outlined"
                            value={userId}
                            onChange={e => setUserId(e.target.value)}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            className="loginButton"
                            style={{padding: "15px"}}
                        >
                            {isLoading ? <Snipper/>: "Create"}
                        </Button>
                        <div className="text">
                            <p>
                                Already have an account ?{" "}
                                <Button
                                    variant="text"
                                    size="small"
                                    href="/login"
                                >
                                    Login
                                </Button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page
