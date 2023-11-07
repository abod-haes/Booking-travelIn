import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {IconButton} from "@mui/material"
import {toast} from "react-toastify"
import { Databases, ID} from "appwrite"
import client from "@/config/appwrite.config"
import {getIdCookie} from "@/utils/cookies"

type Props = {
    cost: string | null
    name: string
    date: string | null
    time: string | null
    img: string | null
}
export default function AlertDialog(props: Props) {
    const [open, setOpen] = React.useState(false)
    const [number, setNumber] = React.useState(1)
    const [loading, setLoading] = React.useState(false)
    const auth = getIdCookie()
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const databases = new Databases(client)
    const book = () => {
        if (props.name && props.cost && props.date && props.time) {
            setLoading(true)
            const promise = databases.createDocument(
                "6521556c832812e46e11",
                "653a4115236682a519cd",
                ID.unique(),
                {
                    img: props.img,
                    cost: props.cost,
                    country: props.name,
                    date: props.date,
                    time: props.time,
                    numberOfSiet: number,
                    idOrder: auth,
                }
            )
            promise.then(
                function (response) {
                    console.log(response)
                },
                function (error) {
                    console.log(error)
                }
            )
            console.log({
                img: props.img,
                cost: props.cost,
                country: props.name,
                date: props.date,
                time: props.time,
                numberOfSiet: number,
                idOrder: auth,
            })
            setOpen(false)
            toast.success("Booking successful")
        }
    }
    return (
        <>
            <Button
                variant="contained"
                onClick={() => {
                    if (props.cost && props.name && props.date && props.time)
                        setOpen(true)
                    else toast.error("Fill all info !!")
                }}
                className="now"
            >
                Book Now
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to book?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        How many seats do you want?
                    </DialogContentText>
                    <div className="number">
                        <IconButton
                            size="small"
                            className="alert"
                            onClick={() => {
                                if (number > 1) setNumber(number - 1)
                            }}
                        >
                            <RemoveIcon />
                        </IconButton>
                        {number + " "}
                        <IconButton
                            size="small"
                            className="alert"
                            onClick={() => setNumber(number + 1)}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit">
                        Cancel
                    </Button>

                    <Button onClick={book} autoFocus className="agree">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
