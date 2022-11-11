import React, { useState } from 'react'
import './serch.css'
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Serch = ({ handleSerch, Xserch }) => {
    const ratingChanged = (newRating) => {
        handleSerch({ ...Xserch, serchRat: newRating })
    };
    const [ser, setSer] = useState("")
    const handleSerchUp = (e) => {
        e.preventDefault()
        handleSerch({ ...Xserch, serchTit: ser })
        setSer("")
    }
    return (
        <div>
            <div>
                <form action="" className="search-bar">
                    <h1>search by title:</h1>
                    <input type="search" name="search" pattern=".*\S.*" required
                        value={ser} onChange={(e) => setSer(e.target.value)} />

                    <nav>
                        <ul>
                            <li onClick={handleSerchUp}>
                                serch
                                <span></span><span></span><span></span><span></span>
                            </li>
                        </ul>
                    </nav>

                </form>
                <div>
                    <h1>search by rate:</h1>
                    <ReactStars size={25} count="10" value={Xserch.serchRat} edit={true}
                        onChange={ratingChanged} />
                </div>
            </div>
        </div>
    )
}
export default Serch;