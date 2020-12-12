import React, { useState, useEffect } from 'react'

const useInitialState = (API, data) => {
    const [videos, setVideos] = useState({ ...data})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                    setVideos(data)
                    setCategories(Object.keys(data))
                }
            )
    }, [])

    return [videos, categories]
}

export default useInitialState