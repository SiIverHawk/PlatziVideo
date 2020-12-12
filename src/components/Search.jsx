import React from 'react'
import '../assets/styles/components/Search.scss'

const mainTitle = '¿Qué quieres ver hoy?'
const inputPlaceholder = 'Buscar...'

const Search = () => (
    <section className="main">
        <h2 className="main__title">{mainTitle}</h2>
        <input type="text" className="input" placeholder={inputPlaceholder} />
  </section>
)

export default Search
