import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoResult } from '../actions'
import '../assets/styles/components/Search.scss'
import classNames from 'classnames'
import Categories from './Categories'
import Carousel from './Carousel'
import CarrouselItem from './CarrouselItem'

const mainTitle = '¿Qué quieres ver hoy?'
const inputPlaceholder = 'Buscar...'

const Search = (props) => {

	const [search, setSearch] = useState('')
	const { isHome, result } = props


	const handleSearch = event => {
		setSearch(event.target.value)
	}

	useEffect(() => {
		const handler = setTimeout(() => {
			props.getVideoResult(search)
		}, 1000);

		return () => {
			clearTimeout(handler)
		}
	}, [search])

	const inputStyle = classNames('input', {
		isHome
	})

	
	return (
		<>
			<section className="main">
				<h2 className="main__title">{mainTitle}</h2>
				<input type="text" name="search" className={inputStyle} placeholder={inputPlaceholder} onChange={handleSearch} />
			</section>
			{result.length > 0 &&
				<Categories title="Resultados">
					<Carousel>
						{result.map(items => (
							<CarrouselItem key={items} {...items} />
						))}
					</Carousel>
				</Categories>
			}
		</>
	)
}

const mapDispatchToProps = {
	getVideoResult
}

const mapStateToProps = state => {
	console.log(state)
	return {
		result: state.result
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)