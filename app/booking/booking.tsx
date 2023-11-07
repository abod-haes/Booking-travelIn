"use client"
import {useEffect, useState} from "react"
import { Databases, Models, Storage} from "appwrite"
import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import "./booking.css"
import {Breadcrumbs, Link, Tabs, Typography} from "@mui/material"
import Card from "./Card/card"
import client from "@/config/appwrite.config"
import Loader from "@/components/loaderSwiber/loader"

const names = [
    "Australia",
    "Brazil",
    "Canada",
    "France",
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Mexico",
    "Russia",
]
const countryIds = [
    "652bbfbc5cadcbf180b8",
    "652bbfc61d1f2da69940",
    "652bbfd38711a99f4e49",
    "652e807d4b0a5c99ce49",
    "652bc016ee31d6b62a91",
    "652bc02356e9a2e6ec59",
    "652d2b2404f0823633d5",
    "652bc02941e23ce864dd",
    "652bc03589165e6bb3ad",
    "652bc03e3dba34be2e34",
]

export default function Booking() {
    const [value, setValue] = useState("1")
    const [image, setImage] = useState("")
    const [props, setProps] = useState<Models.Document[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const storage = new Storage(client)
            const databases = new Databases(client)

            const databaseId = "6521556c832812e46e11"
            const countryId = countryIds[+value - 1]

            setIsLoading(true)

            try {
                const response = await databases.listDocuments(
                    databaseId,
                    countryId
                )
                const documents = response?.documents || []
                setProps(documents)

                if (documents.length > 0) {
                    const [firstDocument] = documents

                    const fileId = firstDocument.file
                    const imgId = firstDocument.img

                    if (fileId && imgId) {
                        const result =  storage.getFileDownload(
                            imgId,
                            fileId
                        )
                        setImage(result?.href || "")
                    }
                }
            } catch (error) {
                console.log("Error:", error)
            }

            setIsLoading(false)
        }

        fetchData()
    }, [value])

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box
            sx={{width: "100%", typography: "body1"}}
            pt={15}
            className="booking"
        >
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography className="linkBooking">Booking</Typography>
                </Breadcrumbs>
                <div className="text">
                    <h3>Booking Now</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>

                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                        <TabList
                            allowScrollButtonsMobile
                            scrollButtons
                            onChange={handleChange}
                            variant="scrollable"
                            aria-label="lab API tabs example"
                        >
                            {names.map((name, index) => (
                                <Tab
                                    label={name} 
                                    value={(index + 1).toString()}
                                    key={index}
                                />
                            ))}
                        </TabList>
                    </Box>
                    <TabPanel value={value}>
                        {isLoading ? ( 
                            <Loader/>
                        ) : (
                            <Card
                                src={image}
                                prop={props}
                                value={names[+value - 1]}
                            />
                        )}
                    </TabPanel>
                </TabContext>
            </div>
        </Box>
    )
}
