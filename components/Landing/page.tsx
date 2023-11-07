import {Button} from "@mui/material"
import Image from "next/image"
import React from "react"
import test from '../../public/Landing.png'
import "./landing.css"
import {getIdCookie} from "@/utils/cookies"
const Landing = () => {
    const userId = getIdCookie()
    console.log(userId)
    return (
        <div className="landing">
            <div className="container">
                <div className="left">
                    <div className="text">
                        <h3>Explore The World</h3>
                        <h2 className="main">Start Planning Your </h2>
                        <h2>Dream Trip Today!</h2>
                    </div>
                    <Button
                        variant="contained"
                        className="bookingButton"
                        size="large"
                        disableElevation
                        href="/booking"
                    >
                        Booking Now
                    </Button>
                </div>
                <div className="img">
                    <Image
                        src={test}
                        alt={"landing"}
                        width={400}
                        height={500}
                        priority
                    />
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Landing
