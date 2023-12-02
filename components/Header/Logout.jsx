"use client"
import { useEffect, useRef } from 'react'
import styles from "./Header.module.css"
import { useRouter } from 'next/navigation'
import AxiosInstance from "@/functions/Axios"

export default function Logout({ changeValue }) {

    const router = useRouter()

    function handleClick() {
        const BACKEND_URI = process.env.BACKEND_URI
        
        AxiosInstance.post(`/logout`).then(res => {
            console.log(res.data)
            changeValue(false)
            if (typeof window !== 'undefined') {
                localStorage.removeItem("user_data")
            }
            router.push("/")
        })
        /* fetch(`${BACKEND_URI}/logout`, { 
            method: "post", 
            headers: { "Content-Type": "application/json" }, 
            //redirect: "follow", 
            credentials: "include" 
        }).then(async (res) => {
            changeValue(false)
            if (typeof window !== 'undefined') {
                localStorage.removeItem("user_data")
            }
            console.log(res.json())
            router.push("/")
        }) */
    }

    return (
        <li className="nav-item">
            <button onClick={ handleClick } className={`nav-link ${styles.link}`} href="/">Logout</button>
        </li>
    )
}