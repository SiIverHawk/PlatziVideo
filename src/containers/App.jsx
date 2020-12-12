import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarrouselItem from '../components/CarrouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'


const App = () => {

    const [videos, categories] = useInitialState('http://localhost:3000/initalState', { mylist: [], trends: [], originals: [] })

    return (
        <div className="App">
            <Header />
            <Search />
            {categories.map((category, index) => (
                videos[category].length > 0 && (
                    <Categories key={index} title={`${category.charAt().toUpperCase()}${category.slice(1)}`}>
                        <Carousel>
                            {videos[category].map((item) => (
                                <CarrouselItem key={item.id} {...item} />
                            ))}
                        </Carousel>
                    </Categories>
                )
            ))}
            <Footer />
        </div>
    )
}


export default App
