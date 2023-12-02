import { NextResponse } from "next/dist/server/web/spec-extension/response";
import AxiosInstance from "@/functions/Axios"

const getData = async (data) => {
    const BACKEND_URI = process.env.BACKEND_URI
    const res = await fetch(`${BACKEND_URI}/getData`, {method: "post", headers: {"Content-Type": "application/json"}, credentials: "include", redirect: "follow"})
    return res.json()
}

const getCart = async (cookie) => {
    const BACKEND_URI = process.env.BACKEND_URI
    //const res = await AxiosInstance.get("/cart") 
    const res = await fetch(`${BACKEND_URI}/cart`, {method: "get", headers: {"Content-Type": "application/json", "Cookie": cookie}, credentials: "include"})
    return res.json()
}

export default async function middleware(req) {
    const uri = req.nextUrl.clone()
    const cookie = req.cookies.get("connect.sid")

    
    if (uri.pathname == "/carrito" && !cookie) {
        return NextResponse.redirect(new URL("/", req.url))
    } /* else if(uri.pathname == "/carrito" && cookie) {
        const res = await getCart(cookie)
        console.log(res)
    } *//* else if(uri.pathname == "/carrito" && cookie) {
        const res = await getData(cookie.value)
        console.log(res)
    } */
    
    /* if (uri.pathname == "/carrito") {
        const res = await getData()
        console.log(res)
        if (res.message) {
            const response = NextResponse.redirect(new URL("/", req.url))
            response.cookies.delete("token")
            return response
        }
        else {
            const response = NextResponse.next()
            response.cookies.delete("token")
            response.cookies.set("token", JSON.stringify(res))
        }
        
    } */

    return NextResponse.next()
}