"use client"
import { useEffect } from 'react'
import styles from "./Header.module.css"
import { useForm } from "react-hook-form"
import { useRef } from "react"

export default function SignUp() {
    useEffect(() => {
        typeof document !== undefined
            ? require("bootstrap/dist/js/bootstrap")
            : null;
    }, [])

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()

    const password = useRef(null);
    password.current = watch("password", "");

    const onSubmit = handleSubmit((data) => {
        console.log(password)
        //console.log(data)
        reset()
    })

    return (
        <div>
            <li className="nav-item">
                <button className={`nav-link ${styles.link}`} type="button" data-bs-toggle="modal" data-bs-target="#modalSignin">Registrarse</button>
            </li>
            <div className="modal fade" id="modalSignin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Registarse</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form onSubmit={onSubmit}>
                                <div className="d-flex">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 me-2">
                                            <input type="text" className="form-control rounded-3" placeholder="Nombre" 
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "El nombre no puede estar vacio"
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: "El nombre es demasiado corto"
                                                },
                                                maxLength: {
                                                    value: 25,
                                                    message: "El nombre es demasiado largo"
                                                }
                                            })}/>
                                            <label>Nombre</label>
                                            {
                                                errors.name && <span className={`${styles.error_span} text-danger`}>{errors.name.message}</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 ms-2">
                                            <input type="text" className="form-control rounded-3" placeholder="Apellidos" 
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: "El apellido no puede estar vacio"
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: "El apellido es demasiado corto"
                                                },
                                                maxLength: {
                                                    value: 25,
                                                    message: "El apellido es demasiado largo"
                                                }
                                            })}/>
                                            <label>Apellidos</label>
                                            {
                                                errors.lastName && <span className={`${styles.error_span} text-danger`}>{errors.lastName
                                                    .message}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" placeholder="Correo electrónico" 
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
                                    <input type="tel" className="form-control rounded-3" placeholder="Celular" 
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "El celular no puede estar vacio"
                                        },
                                        pattern: {
                                            value: /[0-9+]/,
                                            message: "El celular no puede tener letras"
                                        },
                                        minLength: {
                                            value: 4,
                                            message: "El número es muy corto"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "El número es muy largo"
                                        }
                                    })}/>
                                    <label>Celular</label>
                                    {
                                        errors.phone && <span className={`${styles.error_span} text-danger`}>{errors.phone.message}</span>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" placeholder="Password" 
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "La contraseña no puede estar vacio"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "La contraseña es demasiado corto"
                                        },
                                        maxLength: {
                                            value: 25,
                                            message: "La contraseña es demasiado largo"
                                        }
                                    })}/>
                                    <label>Contraseña</label>
                                    {
                                        errors.password && <span className={`${styles.error_span} text-danger`}>{errors.password.message}</span>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" placeholder="Password" 
                                    {...register("password2", {
                                        required: {
                                            value: true,
                                            message: "Este campo no puede estar vacio"
                                        },
                                        validate: (value) => {
                                            if (value == watch("password")) return true
                                            else return "Las contraseñas no coinciden"
                                        }
                                    })}/>
                                    <label>Repetir contraseña</label>
                                    {
                                        errors.password2 && <span className={`${styles.error_span} text-danger`}>{errors.password2.message}</span>
                                    }
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Registrarse</button>
                                <small className="text-body-secondary">Al registrarte aceptas los terminos y condiciones</small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}