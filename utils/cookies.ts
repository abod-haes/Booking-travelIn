import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setIdCookie = (userId: string) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() +   300*60*1000);
    cookies.set("userId", userId, { path: "/", expires: expirationDate });
};

export const getIdCookie = () => {
    return cookies.get("userId");
};

export const deleteIdCookie = () => {
    cookies.remove("userId", { path: "/" });
};