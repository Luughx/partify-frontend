import Image from "next/image";
import Link from "next/link";
import styles from "./ItemCategoria.module.css"
import mainStyles from "@/app/layout.module.css"

export default function ItemCategoria({ image, title, description }) {
    return (
        <div className="col-md-4 mb-4">
                <div className="d-flex flex-column align-items-center">
                    <Link href={`/categorias/${title}`} className={styles.link}>
                        <Image
                        className={styles.image}
                        src={image}
                        width={340}
                        height={200}
                        alt={title}
                        />
                    </Link>
                    <Link href={`/categorias/${title}`} className={styles.link}>
                        <span className={`mt-3 ${mainStyles.color_main_partify} ${styles.title}`}>{title}</span>
                    </Link>
                    <div className={`text-center ${styles.description}`}>
                        {description}
                    </div>
                    <Link href={`/categorias/${title}`} className={`${styles.link} mt-3`}>
                        <span className={`mt-3 ${mainStyles.color_secondary_partify} ${styles.show_more}`}>Ver más</span>
                    </Link>
                </div>
        </div>
    )
}