import {motion} from "framer-motion"
import Link from "next/link"
import React from "react"
import {Slide, menuSlide} from "./animation"
import Core from "./Core"
export default function Nav() {
    return (
        <motion.div
            variants={menuSlide}
            animate="enter"
            exit={"exit"}
            initial="initial"
            className="nav"
        >
            <div className="body">
                <div className="list">
                    <motion.div
                        className="list"
                        variants={Slide}
                        animate="enter"
                        exit={"exit"}
                        initial="initial"
                        custom={1}
                    >
                        <Link href={"/"}>Home</Link>
                    </motion.div>
                    <motion.div
                        className="list"
                        variants={Slide}
                        custom={2}
                        animate="enter"
                        exit={"exit"}
                        initial="initial"
                    >
                        <Link href={"/booking"}>Booking</Link>
                    </motion.div>
                    <motion.div
                        className="list"
                        variants={Slide}
                        animate="enter"
                        custom={3}
                        exit={"exit"}
                        initial="initial"
                    >
                        <Link href={"/"}>Contact</Link>
                    </motion.div>
                    <motion.div
                        className="list"
                        variants={Slide}
                        custom={4}
                        animate="enter"
                        exit={"exit"}
                        initial="initial"
                    >
                        <Link href={"/about"}>About</Link>
                    </motion.div>
                </div>
                <Core />
            </div>
        </motion.div>
    )
}
