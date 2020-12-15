import React from 'react'
import '../assets/styles/components/Search.scss'
import classNames from 'classnames'

const mainTitle = '¿Qué quieres ver hoy?'
const inputPlaceholder = 'Buscar...'

const Search = ({ isHome }) => {
	const inputStyle = classNames('input', {
		isHome
	})
	return (
		<section className="main">
			<h2 className="main__title">{mainTitle}</h2>
			<input type="text" className={inputStyle} placeholder={inputPlaceholder} />
		</section>
	)
}

export default Search
