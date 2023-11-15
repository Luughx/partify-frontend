import Image from "next/image";
import CardHeader from "./CardHeader";
import styles from"./MainHeader.module.css"
import bg from "@/public/main/Header-background.jpg"

export default function MainHeader() {
    return (
        <div className="mainHeader p-4" style={{backgroundImage: `url(${bg.src})`}}>
            <div className={"p-5 px-5 text-center"}>
                <div className={`py-5 px-5`}>
                    <div className={styles.mainBox}>
                        <Image 
                        src={"/PY-Logo-new.png"}
                        width={391}
                        height={164}
                        />
                        <p className={`col-lg-8 mx-auto mt-4 text-white ${styles.textHeader}`}>
                        ¡Aquí podrás planear la fiesta ideal!
                        </p>
                        <div className="d-flex justify-content-center py-3 my-4">
                            <CardHeader 
                            image={"/main/cardsHeader/gender.png"}
                            nombre={"Gender reveal"}
                            />
                            <CardHeader 
                            image={"/main/cardsHeader/baby.png"}
                            nombre={"Baby Shower"}
                            />
                            <CardHeader 
                            image={"/main/cardsHeader/christening.png"}
                            nombre={"Bautizo"}
                            />
                            <CardHeader 
                            image={"/main/cardsHeader/partyI.png"}
                            nombre={"Fiesta infantil"}
                            />
                            <CardHeader 
                            image={"/main/cardsHeader/partyT.png"}
                            nombre={"Fiesta teen"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}