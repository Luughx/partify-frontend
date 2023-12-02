import ItemCategoria from "@/components/categorias/ItemCategory";
import styles from "./page.module.css"

const getServices = async () => {
    const { BACKEND_URI } = process.env
    const res = await fetch("http://localhost:8080/api/services", {method: "get", headers: {"Content-Type": "application/json"}})
    return res.json()
}

export default async function Main() {

    return (
        <div className="container p-4">
            <h3>Perfil</h3>
        </div>
    )
}