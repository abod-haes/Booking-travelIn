"use client"
import React from "react"
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"
import "./core.css"
export default function CoreCard() {
    return (
        <div className="core">
            <div className="container">
                <div className="main-header">
                    <h3>Core Features</h3>
                    <h2>
                        <span className="black">Find</span>Travel Perfection
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <div className="boxes">
                    <div className="box">
                        <EmojiFlagsIcon />
                        <h3>Tell Us What You Want To Do</h3>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa.
                        </p>
                        <span>Read More</span>
                    </div>
                    <div className="box">
                        <LocationOnOutlinedIcon />
                        <h3>Share Your Travel Locations</h3>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa.
                        </p>
                        <span>Read More</span>
                    </div>
                    <div className="box">
                        <MapOutlinedIcon />
                        <h3>Share Your Travel Preference</h3>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa.
                        </p>
                        <span>Read More</span>
                    </div>
                    <div className="box">
                        <ThumbUpOutlinedIcon />
                        <h3>100% Trusted Tour Agency</h3>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa.
                        </p>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
