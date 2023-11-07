import {motion} from "framer-motion"
import React from "react"

export default function Core() {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
        window.innerHeight / 2
    }  100 0`
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
        window.innerHeight / 2
    }  100 0`
    const Path = {
        initial: {d: initialPath},
        enter: {
            d: targetPath,
            transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]},
        },
        exit: {
            d: initialPath,
            // transition: {duration: 0.2},
        },
    }
    return (
        <svg className="svg">
            <motion.path
                variants={Path}
                initial="initial"
                animate="enter"
                exit={"exit"}
            ></motion.path>
        </svg>
    )
}
