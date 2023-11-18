import Image from "next/image";
import Link from "next/link";
import styles from "./ItemCategory.module.css"

export default function ItemCategory({ image, title }) {
    return (
        <div className="col-md-4 mb-4">
            <Link href={`/categorias/${title}`} className={styles.title}>
                <div className="d-flex flex-column align-items-center">
                    <Image
                    className={styles.image}
                    src={image}
                    width={267}
                    height={157}
                    alt={title}
                    />
                    <span className={`mt-3`}>{title}</span>
                </div>
            </Link>
        </div>
    )
}