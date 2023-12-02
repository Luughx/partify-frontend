import ItemCategoria from "@/components/categorias/ItemCategory";
import styles from "./page.module.css"
import AxiosInstance from "@/functions/Axios"
import { cookies } from "next/headers";

const getCart = async () => {
    const cookiesStore = cookies()
    const token = cookiesStore.get("connect.sid")
    const res = await AxiosInstance.get("/cart", {headers: {
        "Cookie": `${token.name}=${token.value}`
    }})
    return res.data
}

export default async function MainCart({ data }) {
    const res = await getCart()
    console.log(res)
    return (
        <div className="container p-4">
            <div className="text-center">
                <h2 className={styles.question}>¿Qué estás buscando hoy?</h2>
                <h3 className={styles.category}>Categorías</h3>
            </div>
            <div className="mb-4 mt-4"></div>
            <div className="d-flex row mt-4">
            </div>
        </div>
    )
}