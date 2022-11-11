import React from 'react'
import Card from './card'
const MovieList = ({ movies }) => {
    return (
        <div className="mvls">
            {movies.map((el) => (
                <Card el={el} />
            ))}
            
        </div>
    )
}
export default MovieList