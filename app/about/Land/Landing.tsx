import React from "react"
import "./landing.css"
import Image from "next/image"
const Landing = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="land">
                    <div className="img">
                        <Image
                            src={"/landing.png"}
                            alt={"landing"}
                            width={400}
                            height={500}
                        />
                        <span></span>
                    </div>
                    <div className="right">
                        <span className="poptext"></span>
                        <div className="text">
                            <div className="head-text">
                                <h3>Get To Know Us</h3>
                                <h2>Explore All Tour Of The</h2>
                                <h2>World With Us.</h2>
                            </div>
                            <div className="para">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="num">
                <div className="container">
                    <div className="boxes">
                        <div className="box">
                            <h3>10</h3>
                            <p>Years Experiences</p>
                        </div>
                        <div className="box">
                            <h3>50</h3>
                            <p>Tour Packages</p>
                        </div>
                        <div className="box">
                            <h3>843</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="box">
                            <h3>65</h3>
                            <p>Award Winning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
