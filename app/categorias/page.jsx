import ItemCategoria from "@/components/categorias/ItemCategory";
import styles from "./page.module.css"

export default function Main() {
    return (
        <div className="container p-4">
            <div className="text-center">
                <h2 className={styles.question}>¿Qué estás buscando hoy?</h2>
                <h3 className={styles.category}>Categorías</h3>
            </div>
            <div className="mb-4 mt-4"></div>
            <div className="d-flex row mt-4">
                <ItemCategoria 
                title={"Salones"}
                image={"/categories/salones.jpg"}
                />
                <ItemCategoria 
                title={"Piñatas"}
                image={"/categories/piniatas.jpg"}
                />
                <ItemCategoria 
                title={"Pasteles"}
                image={"/categories/pasteles.jpg"}
                />
                <ItemCategoria 
                title={"Fotógrafo"}
                image={"/categories/fotografo.jpg"}
                />
                <ItemCategoria 
                title={"Dulces"}
                image={"/categories/dulces.jpg"}
                />
                <ItemCategoria 
                title={"Decoración"}
                image={"/categories/decoracion.jpg"}
                />
                <ItemCategoria 
                title={"Animadores"}
                image={"/categories/animadores.jpg"}
                />
            </div>
        </div>
    )
}