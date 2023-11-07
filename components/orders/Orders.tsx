    // orders.js
    "use client"
    import { Badge, Button, Drawer, IconButton } from "@mui/material";
    import Image from "next/image";
    import React, { useEffect, useState } from "react";
    import "./orders.css";
    import { Databases, Models } from "appwrite";
    import client from "@/config/appwrite.config";
    import { getIdCookie } from "@/utils/cookies";
    import Link from "next/link";
    import Card from "./card";
    import {MdOutlineFlightTakeoff} from 'react-icons/md'
    import Loader from '../loaderSwiber/loader';
    import { fetchOrders, deleteOrder } from "@/app/api/orders";

    export default function Orders() {
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetchOrders().then((orders) => {
        setOrders(orders);
        }).catch((error) => {
        console.log(error);
        });
        setIsLoading(false)
    }, [open]);

    const handleDeleteOrder = (orderId:any) => {
        deleteOrder(orderId).then(() => {
        fetchOrders().then((orders) => {
            setOrders(orders);
        }).catch((error) => {
            console.log(error);
        });
        }).catch((error) => {
        console.log(error);
        });
    };
console.log(orders.length);
    return (
        <div className="orders">
        <IconButton onClick={() => setOpen(true)} className="fight">
            <MdOutlineFlightTakeoff className="flight" />
        </IconButton>
        <Drawer
            open={open}
            anchor="bottom"
            onClose={() => setOpen(false)}
            style={{ minHeight: "500px" }}
        >
            <div className="container order">
            <Image src="/LogoTravelIn.png" alt="" width={200} height={47} />
            {isLoading?<Loader/>:orders?.length ? (
                orders?.map((e:any) => (
                <Card
                    key={e.id}
                    numberOfSiet={e.numberOfSiet}
                    cost={e.cost}
                    img={e.img}
                    id={e.id}
                    time={e.time}
                    country={e.country}
                    date={e.date}
                    idOrder={e.idOrder}
                    onDelete={() => handleDeleteOrder(e.id)}
                />
                ))
            ) : (
                <p>
                Please <Link href={"/booking"}>Booking</Link> Now
                </p>
            )}
            </div>
        </Drawer>
        </div>
    );
    }