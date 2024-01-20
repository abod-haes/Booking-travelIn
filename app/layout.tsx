"use client";

import { Footer, Header, Orders } from "@/components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { usePathname } from "next/navigation";
import CurrentDate from "@/components/Date/page";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            main: "#029E9D",
        },
    },
});
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body>
                <main>
                    <ToastContainer />
                    {["/login", "/register"].includes(pathname) ? (
                        children
                    ) : (
                        <ThemeProvider theme={theme}>
                            <div className="h">
                                <CurrentDate />
                                <Header />
                            </div>
                            {children}
                            <Orders />
                            <Footer />
                        </ThemeProvider>
                    )}
                </main>
            </body>
        </html>
    );
}
