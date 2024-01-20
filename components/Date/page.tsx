import React, { useEffect, useState } from "react";
import "./date.css";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import { getIdCookie, deleteIdCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CurrentDate: React.FC = () => {
    const [hour, setHour] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [isLogin, setIsLogin] = useState(getIdCookie());
    const [isLoading, setIsLoading] = useState(false);
    const route = useRouter();
    useEffect(() => {
        setIsLogin(getIdCookie());
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            setMin(currentDate.getMinutes());
            setHour(currentDate.getHours());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="date">
            <div className="container">
                <div className="calls">
                    <div className="call">
                        <CallIcon />
                        +963 432 544
                    </div>
                    <div className="call">
                        <MailOutlineIcon />
                        hares@gmail.com
                    </div>
                    <div className="call">
                        <QueryBuilderOutlinedIcon />
                        {hour <= 12 ? (
                            <>
                                {hour >= 10 ? hour : `0${hour}`}:
                                {min < 10 ? `0${min}` : min}am
                            </>
                        ) : (
                            <>
                                {hour - 12 >= 10 ? hour - 12 : `0${hour - 12}`}:
                                {min} pm
                            </>
                        )}
                    </div>
                </div>
                <div className="icons">
                    <Image
                        src={"/face.png"}
                        alt="facebook"
                        width={20}
                        height={20}
                    />
                    <span className="span"></span>
                    <Image
                        src={"/insta.png"}
                        alt="facebook"
                        width={500}
                        height={500}
                        style={{ width: "20px", height: "20px" }}
                    />
                    <span className="span"></span>
                    <Image
                        src={"/linked.png"}
                        alt="facebook"
                        width={20}
                        height={20}
                    />
                    {isLogin ? (
                        <Button
                            className="loginButton"
                            variant="text"
                            onClick={() => {
                                deleteIdCookie();
                                setIsLogin(getIdCookie());
                                toast.info("You are logged out");
                                route.replace("/");
                            }}
                        >
                            {isLoading ? "" : "logout"}
                        </Button>
                    ) : (
                        <Button
                            className="loginButton"
                            variant="text"
                            href="/login"
                        >
                            Login
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CurrentDate;
