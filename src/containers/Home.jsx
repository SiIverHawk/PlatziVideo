import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarrouselItem from '../components/CarrouselItem'
import '../assets/styles/App.scss'
import Header from '../components/Header'


const Home = ({ lists }) => {

    return (
        <>
            <Header />
            <Search isHome />
            {Object.keys(lists).map((category, index) => (
                <Categories key={index} title={`${category.charAt().toUpperCase()}${category.slice(1)}`}>
                    <Carousel>
                        {lists[category].map((item) => (
                            <CarrouselItem key={item.id} {...item} category={category} />
                        ))}
                    </Carousel>
                </Categories>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}


export default connect(mapStateToProps, null)(Home)