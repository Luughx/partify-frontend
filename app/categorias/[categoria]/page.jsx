import mainStyles from "@/app/layout.module.css"
import styles from "@/app/categorias/[categoria]/page.module.css"
import ItemCategoria from "@/components/categorias/categoria/ItemCategoria"

export default function Main({ params }) {
    return (
        <div className="container p-4">
            <h2 className={`${mainStyles.color_secondary_partify} ${styles.title}`}>
                {params.categoria}
            </h2>
            <div className="d-flex row mt-4">
                <ItemCategoria
                image={"/categories/salones.jpg"}
                title={"salones"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
            </div>
        </div>
    )
}