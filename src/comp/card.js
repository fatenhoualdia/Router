import ReactStars from "react-rating-stars-component";
import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import Descrip from "./Descrip";

const Movie = ({ el }) => {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <img src={el.posturl} alt="" />
          <div className="descriptions">
            <h2>{el.title}</h2>
            <p>
              {el.description}</p>
            <h2><h4>{el.rate}</h4> <ReactStars size={15} count="10" value={el.rate} edit={false} /></h2>

            <Link to={`/descrip/${el.title}`}>
              <button>
                <i className="fab fa-youtube" />
                see more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Movie