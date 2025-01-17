import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'
import Header from '../components/Header'

const Register = (props) => {

    const [form, setForm] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleInput = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.registerRequest(form)
        props.history.push('/')
    }



    return (
        <>
        <Header isRegister />
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input name="name" className="input" type="text" placeholder="Nombre" onChange={handleInput} />
                        <input name="email" className="input" type="email" placeholder="Correo" onChange={handleInput} />
                        <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput} />
                        <button className="button">Registrarme</button>
                    </form>
                    <Link to="/login">
                        Iniciar Sesión
                </Link>
                </section>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    registerRequest
}

export default connect(null, mapDispatchToProps)(Register)