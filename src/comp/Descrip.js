import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './des.css'
const Descrip = ({ match, movies }) => {
    const x = movies.find((el) => el.title == match.params.title)

    return (
        <div>
            <center>
                <h1 style={{ color: "red" }}>{x.title}</h1>
                <h2 style={{ color: "whitesmoke" }}>{x.description}</h2>
                {x.trai}<br />
                <Link to="/">
                  
                    <nav>
                        <ul>
                            <li>
                                home
                                <span></span><span></span><span></span><span></span>
                            </li>
                        </ul>
                    </nav>
                    
                </Link>
            </center>
        </div>
    )
}

export default Descrip
