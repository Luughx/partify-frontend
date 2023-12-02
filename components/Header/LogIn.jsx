"use client"
import { useEffect } from 'react'
import { useForm } from "react-hook-form"
import styles from "./Header.module.css"
import { useRouter } from 'next/navigation'
import AxiosInstance from "@/functions/Axios"

const login = async (data) => {
    const res = await AxiosInstance.post("/login", {
        email: data.email,
        password: data.password  
    })
    console.log(res.data)
    return res.data
}

export default function LogIn({ changeValue }) {
    const router = useRouter()

    useEffect(() => {
        typeof document !== undefined
            ? require("bootstrap/dist/js/bootstrap")
            : null;
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        const res = await login(data)
        if (typeof window !== 'undefined') {
            localStorage.setItem("user_data", JSON.stringify(res))
        }
        changeValue(true)
        router.push(`/perfil/${res.id}`)
        reset()
    })

    return (
        <div>
            <li className="nav-item">
                <button className={`nav-link ${styles.link}`} type="button" data-bs-toggle="modal" data-bs-target="#modalLogin">Iniciar sesión</button>
            </li>
            <div className="modal fade" id="modalLogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Inicia sesión</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form onSubmit={onSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" placeholder="name@example.com" 
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "El correo no puede estar vacio"
                                        },
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: "El correo es inválido"
                                        }
                                    })}/>
                                    <label>Correo electrónico</label>
                                    {
                                        errors.email && <span className={`${styles.error_span} text-danger`}>{errors.email.message}</span>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" placeholder="Password" 
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "La contraseña no puede estar vacio"
                                        }
                                    })}/>
                                    <label>Contraseña</label>
                                    {
                                        errors.password && <span className={`${styles.error_span} text-danger`}>{errors.password.message}</span>
                                    }
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Iniciar sesión</button>
                                <small className="text-body-secondary">Recordar contraseña</small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}