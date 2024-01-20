"use client"
import { ThemeProvider, createTheme } from "@mui/material"
import Booking from "./booking"
const theme = createTheme({
    palette: {
        primary: {
            main: "#029E9D",
        },
    },
});
export default function Page() {

    return (
        <ThemeProvider theme={theme}>
            <Booking />
        </ThemeProvider>
    )
}
