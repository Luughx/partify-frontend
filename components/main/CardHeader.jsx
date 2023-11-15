import Image from "next/image"
import styles from "./CardHeader.module.css"

export default function CardHeader({ image, nombre }) {
    return (
        <div className={`card ps-4 pe-4 pt-3 ${styles.divCard}`}>
            <div className={styles.imageContainer}>
                <Image
                src={image}
                className={`card-img-top mx-auto ${styles.imageCard}`}
                width={63}
                height={63}
                />
            </div>
            <div className="card-body">
                <h5 className={`card-title cardName ${styles.cardName}`}>{nombre}</h5>
            </div>
        </div>  
    )
}