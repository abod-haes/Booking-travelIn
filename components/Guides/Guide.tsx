import Image from "next/image"
import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
type Props = {
    img: string
    name: string
    magor: string
    id: number
    key: number
}
export default function Guide(props: Props) {
    return (
        <div className="guide" key={props.id}>
            <div className="img">
                <Image
                    src={props.img}
                    alt=""
                    width={500}
                    height={500}
                    className="me"
                />
                <div className="details">
                    <Image src="/insta.png" alt="" width={30} height={30} />
                    <Image src="/face.png" alt="" width={30} height={30} />
                    <Image src="/insta.png" alt="" width={30} height={30} />
                    <Image src="/face.png" alt="" width={30} height={30} />
                </div>
            </div>
            <div className="text">
                <h4 className="name">{props.name}</h4>
                <p>{props.magor}</p>
            </div>
        </div>
    )
}
