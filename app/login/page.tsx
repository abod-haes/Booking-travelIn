"use client"
import React, {FormEvent, useState} from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import {ToastContainer, toast} from "react-toastify"
import "./login.css"
import {AuthService} from "@/services"
import {useRouter} from "next/navigation"
import {setIdCookie} from "@/utils/cookies"
import { TransitionGroup } from "react-transition-group";
import { Snipper } from "@/components"
const Page = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)
    const route = useRouter()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !password) {
            toast.error("please Fill all fields")
            return
        }

        const authService = AuthService.getInstance()

        setLoading(true)
        authService
            .login(email, password)
            .then((res: any) => {
                setLoading(false)
                setIdCookie(res.userId)
                route.replace("/")
            })
            .catch(err => {
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
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
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
                            className="loginButto"
                            style={{padding: "15px"}}
                        >
                            {isLoading ? <Snipper /> : "Login"}
                        </Button>
                        <div className="text">
                            <p>
                                Do not you have an account?{" "}
                                <Button
                                    variant="text"
                                    size="small"
                                    href="/register"
                                >
                                    Create
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
