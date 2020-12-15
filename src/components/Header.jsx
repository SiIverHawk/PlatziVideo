import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutRequest } from '../actions/index'
import classNames from 'classnames'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'


const Header = (props) => {

    const { user, isLogin, isRegister } = props
    const hasUser = Object.keys(user).length

    const handleLogout = () => {
        props.logoutRequest({})
    }

    const headerClass = classNames('header', {
        isLogin,
        isRegister
    })

    return (
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={hasUser > 0 ? gravatar(user.email) : userIcon} alt={user.email} />
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser > 0 ?
                        <>
                            <li>
                                <a href="/">Cuenta</a>
                            </li>
                            <li>
                                <a href="#logout" onClick={handleLogout}>Cerrar sesión</a>
                            </li>
                        </> :
                        <li>
                            <Link to="/login">Iniciar Sesión</Link>
                        </li>
                    }
                </ul>
            </div>
        </header >
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

Header.propTypes = {
    user: PropTypes.object,
    hasUser: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)