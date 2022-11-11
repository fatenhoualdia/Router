import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './add.css'

const Add = ({ handleAjout }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [tit, setTit] = useState("")
    const [des, setDes] = useState("")
    const [ima, setIma] = useState("")
    const [rat, setRat] = useState("")
    const handleAdd = (e) => {
        if (isNaN(rat)) {
            alert('rate should be a bumber')
        }
        if (ima.startsWith('http') === false) {
            alert('image url should be an URL')
        }
        handleAjout({ title: tit, description: des, rate: rat, posturl: ima })
        e.preventDefault()
        setTit("")
        setDes("")
        setIma("")
        setRat("")
        handleClose()
    }
    return (
        <div>
            <h1>welcome</h1>
            
            <nav>
                        <ul>
                            <li onClick={handleShow}>
                            Add A Movie
                                <span></span><span></span><span></span><span></span>
                            </li>
                        </ul>
                    </nav>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Propose A Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    -Title:<br />
                    <input type="text" value={tit} onChange={(e) => setTit(e.target.value)} required /><br />
                    -Description:<br />
                    <textarea value={des} onChange={(e) => setDes(e.target.value)} required /><br />
                    -Image URL:<br />
                    <input type="text" value={ima} onChange={(e) => setIma(e.target.value)} required /><br />
                    -Rate:<br />
                    <input type="text" value={rat} onChange={(e) => setRat(e.target.value)} required /><br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Add