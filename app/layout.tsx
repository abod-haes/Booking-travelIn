"use client"

import {Footer, Header, Orders} from "@/components"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"

import {usePathname} from "next/navigation"
import CurrentDate from "@/components/Date/page"
import { useEffect, useState } from "react"

export default function RootLayout({children}: {children: React.ReactNode}) {
    const pathname = usePathname()

        return (
        <html lang="en">
            <body>
                <main>
                    <ToastContainer />
                    {["/login", "/register"].includes(pathname) ? (
                        children
                    ) : (
                        <>
                            <div className="h">
                                <CurrentDate />
                                <Header/>
                            </div>
                            {children}
                            <Orders />
                            <Footer />
                        </>
                    )}
                </main>
            </body>
        </html>
    )
}
