"use client"
import React, {useEffect} from "react"
import {useRouter} from "next/navigation"
import {getIdCookie} from "@/utils/cookies"
import Loading from "../loading"

export default function RootLayout({children}: {children: React.ReactNode}) {
    const router = useRouter()
    const userId = getIdCookie()

    useEffect(() => {
        if (!userId) {
            router.replace("/login")
        }
    }, [userId, router])

    return userId ? <main>{children}</main> : <main> <Loading/></main>
}
