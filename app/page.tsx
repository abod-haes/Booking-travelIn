"use client";

import { CoreCard, Guides, Landing } from "@/components";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
const theme = createTheme({
    palette: {
        primary: {
            main: "#029E9D",
        },
    },
});
const page = () => {
    return (
        <ThemeProvider theme={theme}>
            <Landing />
            <CoreCard />
            <Guides />
        </ThemeProvider>
    );
};

export default page;
