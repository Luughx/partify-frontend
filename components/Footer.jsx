import Image from "next/image"
import styles from "./Footer.module.css"
import { Quicksand } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const quicksand = Quicksand({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ['latin'] 
  })

export default function Footer() {
    return (
        <div className={`${styles.main_footer} ${quicksand.className}`}>
            <footer className="container py-2 px-4">
                <div className="d-flex flex-wrap justify-content-around align-items-center py-3 px-4">
                    <Image 
                    src={"/PY-Logo-Web-Dark.png"}
                    className={styles.footerImage}
                    width={198.08}
                    height={82.83}
                    />
                    <div className={`${styles.textFooter}`}>
                    Somos la mejor opción para encontrar proveedores confiables para tu evento
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 mb-4">
                    <ul className="nav flex-column justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link text-white">Quiero ser proveedor</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-white">Política de privacidad</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-white">Sobre nosotros</a></li>
                    </ul>

                    <p className="mb-0 text-white">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faYoutube} className="ms-2" size="2x" />
                        <FontAwesomeIcon icon={faInstagram} className="ms-2" size="2x" />
                        <FontAwesomeIcon icon={faLinkedin} className="ms-2" size="2x" />
                    </p>
                </div>
                <hr />
                <div className="text-center mb-4">
                    ® Partify 2023. Monterrey, Nuevo León, México. Todos los derechos Reservados.
                </div>
            </footer>
        </div>
    )
}