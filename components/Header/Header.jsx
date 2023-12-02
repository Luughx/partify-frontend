"use server";

import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"
import { cookies } from "next/headers"
import LoginBar from "./LoginBar";

const getData = async (data) => {
    const BACKEND_URI = process.env.BACKEND_URI
    const res = await fetch(`${BACKEND_URI}/getData`, {method: "get", headers: {"Content-Type": "application/json"}, credentials: "include"})
    return res.json()
}

export default async function Header() {
    const cookiesStore = cookies()

    async function deleteToken() {
        cookiesStore.delete("connect.sid");
    }
    
    return (
        <nav className={`navbar navbar-expand-lg ${styles.header_container}`}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" href="/">
                        <Image
                        src={"/PY-Web-Logo.png"}
                        width={177}
                        height={74}
                        alt="Partify"
                        />
                    </Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.link}`} href="/" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.link}`} href="#">Arma tu fiesta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.link}`} href="/categorias">Directorio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.link}`} href="#">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.link}`} href="#">Contacto</Link>
                        </li>
                    </ul>
                    <LoginBar cookies={ cookiesStore.get("connect.sid") } />
                </div>
            </div>
        </nav>
    )
}