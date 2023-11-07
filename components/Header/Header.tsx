"use client"
import React, {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import Image from "next/image"
import "./Header.css"
import Nav from "./Nav"
import {Badge, IconButton} from "@mui/material"
import { usePathname } from "next/navigation"

const Header = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    useEffect   (()=>{
        setOpen(false)
        console.log(pathname)
    }, [pathname])
    return (
        <div className="header">
            <div className={`pop ${open ? "opened":""}`} onClick={()=>setOpen(false)}></div>
            <div className="container">
                <motion.button
                    whileHover={{x: 0}}
                    initial={{x: 0}}
                    animate={{x: -70}}
                >
                    <Image
                        src={"/LogoTravelIn.png"}
                        alt="logo"
                        width={180}
                        height={40}
                        priority
                    />
                </motion.button>
                <div className="button">
                    <div
                        className={`burger ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    ></div>
                    <AnimatePresence mode="wait">
                        {open && <Nav />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Header
