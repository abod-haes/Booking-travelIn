import Image from "next/image"
import React from "react"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import {Button, TextField} from "@mui/material"
import {FiFacebook} from "react-icons/fi"
import {BsInstagram} from "react-icons/bs"
import {LiaGoogle} from "react-icons/lia"
import {BiLogoLinkedin} from "react-icons/bi"
import "./footer.css"
export default function Footer() {
    return (
        <div className="footer" id='footer'>
            <div className="container F">
                <div className="logo">
                    <Image
                        src="/WhiteLogo.png"
                        alt=""
                        width={216}
                        height={45}
                    />
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="details">
                        <div className="box">
                            <LocationOnOutlinedIcon />{" "}
                            <span>256 Elizaberth Ave, CA, 90025</span>
                        </div>
                        <div className="box">
                            <PhoneOutlinedIcon /> <span>+569 2316 2156</span>
                        </div>
                        <div className="box">
                            <EmailOutlinedIcon /> <span>info@travelin.com</span>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <div className="col">
                        <h3>Quick Link</h3>
                        <p>Our Team</p>
                        <p>Portfolio</p>
                        <p>FAQ</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Customer Service</p>
                    </div>
                    <div className="col">
                        <h3>Categories</h3>
                        <p>Travel</p>
                        <p>Technology</p>
                        <p>Lifestyle</p>
                        <p>Entertainment</p>
                        <p>Business</p>
                        <p>Destination</p>
                    </div>
                </div>
                <div className="news">
                    <div className="text">
                        <h3>Newsletter</h3>
                        <p>
                            Join our community of over 200,000 global readers
                            who receive emails filled with news, promotions, and
                            other good stuff.
                        </p>
                    </div>
                    <div className="in">
                        <input
                            type="text"
                            placeholder="Email"
                            className="email"
                        />
                        <Button
                            variant="contained"
                            color="info"
                            className="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="smallFooter">
                    <p>2023 Travelin. All rights reserved.</p>
                    <div className="icons">
                        <FiFacebook />
                        <BsInstagram />
                        <LiaGoogle />
                        <BiLogoLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}
