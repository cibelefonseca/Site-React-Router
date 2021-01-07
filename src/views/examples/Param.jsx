import React from 'react'
import { useParams } from 'react-router-dom'

const Home = props => {
    // id em Content
    const {id} = useParams()
    return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Valor: {id}</h2>
        </div>
    )
}

export default Home