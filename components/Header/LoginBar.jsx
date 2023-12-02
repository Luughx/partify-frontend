"use client"
import styles from "./Header.module.css"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import Logout from "./Logout"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export default function LoginBar({ cookies }) {
    
    const router = useRouter()
    const [cookieValue, setCookieValue] = useState(cookies)
    
    /* useEffect(() => {
        setCookieValue(cookies)
    }, []) */
    
    function changeValue(value) {
        setCookieValue(value)
    }

    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
                cookieValue && <Logout changeValue={ changeValue } />
            }
            {
                !cookieValue && <LogIn changeValue={ changeValue } />
            }
            {
                !cookieValue && <SignUp />
            }
        </ul>
    )
}