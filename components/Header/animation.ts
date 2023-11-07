export const menuSlide = {
    initial: {x: "100px"},
    enter: {
        x: "0px",
        transition: {duration: 0.4},
    },
    exit: {x: "100px", transition: {duration: 0.1, delay: 0.2}},
}
export const Slide = {
    initial: {x: "40px"},
    enter: (i: number) => ({
        x: "0px",
        transition: {duration: 0.2, delay: 0.05 * i},
    }),
    exit: (i: number) => ({
        x: "40px",
        transition: {duration: 0.2, delay: 0.05 * i},
    }),
}
