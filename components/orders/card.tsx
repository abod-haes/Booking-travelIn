// card.js

import Image from 'next/image'
import React from 'react'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Client, Databases } from 'appwrite'
import client from '@/config/appwrite.config'
import { deleteOrder } from '@/app/api/orders'
import Dialog from '@mui/material/Dialog';
import Loader from '../loaderSwiber/loader';

type CardProps = {
  img: string,
  cost: string,
  id: string,
  time: string,
  country: string,
  date: string,
  idOrder: string,
  numberOfSiet: number,
  onDelete: () => void
}

export default function Card(props: CardProps) {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
  return (
    <div className="card">
      <Image src={props.img} alt="" width={150} height={150} />
      <div className="text">
        <h2>
          <LocationOnOutlinedIcon />
          To {props.country}
        </h2>
        <p>in {props.date} at {props.time}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab vel, autem maxime excepturi
          mollitia ratione repudiandae beatae
        </p>
      </div>
      <Button variant="contained" size="large" onClick={()=>{
        setOpen(true)
      }}>
        Delete
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
                       Are you sure you want to delete this order?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit">
                        Cancel
                    </Button>

                    <Button onClick={props.onDelete} autoFocus className="agree">
                      {loading?<Loader/>:'agree'}
                    </Button>
                </DialogActions>
            </Dialog>
    </div>
  )
}