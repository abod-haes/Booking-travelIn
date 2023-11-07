import React from "react"
import Guide from "./Guide"
import "./guides.css"
const GuidesList = [
    {id: 1, name: "Abdulrahman", img: "/p1.jpg", magor: "director"},
    {id: 2, name: "Latifah", img: "/p2.jpg", magor: "Toor assessment"},
    {id: 3, name: "Salem", img: "/p3.jpg", magor: "Toor Guide"},
    {id: 4, name: "Mohamd", img: "/p4.jpg", magor: "Toor Guide"},
]
export default function Guides() {
    return (
        <div className="guides">
            <div className="container">
                <div className="main-header">
                    <h3>Tour Guides</h3>
                    <h2>
                        <span className="black">Meet Our</span> Excellent Guides
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <div className="cardsGuides">
                    {GuidesList.map(guide => (
                        <Guide
                            id={guide.id}
                            name={guide.name}
                            img={guide.img}
                            magor={guide.magor}
                            key={guide.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
