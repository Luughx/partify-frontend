import ItemCategoria from "@/components/categorias/ItemCategory";
import styles from "./page.module.css"

const getServices = async () => {
    const { BACKEND_URI } = process.env
    const res = await fetch("http://localhost:8080/api/services", {method: "get", headers: {"Content-Type": "application/json"}})
    return res.json()
}

export default async function Main() {

    const sericesData = await getServices()

    return (
        <div className="container p-4">
            <div className="text-center">
                <h2 className={styles.question}>¿Qué estás buscando hoy?</h2>
                <h3 className={styles.category}>Categorías</h3>
            </div>
            <div className="mb-4 mt-4"></div>
            <div className="d-flex row mt-4">
                {sericesData.map(service => (
                    <ItemCategoria 
                    title={service.name}
                    image={service.thumbnailURI}
                    key={service.id}
                    />
                ))}
            </div>
        </div>
    )
}