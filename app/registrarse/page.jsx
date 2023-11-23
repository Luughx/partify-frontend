"use client"
import { useForm } from "react-hook-form"
import styles from "./page.module.css"

export default function Main() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="container p-4">
            <h3>Registro</h3>
            <form onSubmit={onSubmit}>
                <div className="d-flex">
                    <div className="col-md-6">
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "El nombre no puede estar vacio"
                                    }
                                })}
                            />
                            <label for="floatingInput">Nombre</label>
                            {
                                errors.name && <span className={`${styles.error_span} text-danger`}>{errors.name.message}</span>
                            }
                        </div>
                    </div>
                    <div className="col-md-6 ms-4">
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "El nombre no puede estar vacio"
                                    }
                                })}
                            />
                            <label for="floatingInput">Nombre</label>
                            {
                                errors.name && <span className={`${styles.error_span} text-danger`}>{errors.name.message}</span>
                            }
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">enviar</button>
            </form>
        </div>
    )
}