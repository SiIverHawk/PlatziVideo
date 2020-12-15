import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'

const Player = (props) => {

    const { id } = props.match.params
    const [loading, setloading] = useState(true)
    const hasPlaying = Object.keys(props.playing).length > 0

    useEffect(() => {
        props.getVideoSource(id)
        setloading(false)
    }, [])


    if (loading) {
        return <h3>Cargando...</h3>
    }
    
    return hasPlaying ? (

        <div className="player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <Redirect to="/404/" />
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)