import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addProduct } from '../redux/actions/productAction'

const AddProduct = (props) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [note, setNote] = useState('')
    const [price, setPrice] = useState('')

    const handleChange = (e) => {
        if(e.target.name === 'image'){
            setImage(e.target.value)
        } else if (e.target.name === 'name'){
            setName(e.target.value)
        } else if (e.target.name === 'type'){
            setType(e.target.value)
        } else if (e.target.name === 'note'){
            setNote(e.target.value)
        } else if (e.target.name === 'price'){
            setPrice(e.target.value)
        }
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        const payload = {
            image,
            name,
            type,
            note,
            price
        }
        dispatch(addProduct(payload))
        handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Product
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Product    </Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
                <div className="form-group">
                    <label>Image URL</label>
                    <input onChange={handleChange} name="image" className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={handleChange} name="name" className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>type</label>
                    <select onChange={handleChange} className="form-control" name="type">
                        <option disabled>select type</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Tea">Tea</option>
                        <option value="Juice">Juice</option>
                        <option value="Mocktail">Mocktail</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <input onChange={handleChange} name="note" className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input onChange={handleChange} name="price" className="form-control" type="text"></input>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit">
                Save Changes
                </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
  export default AddProduct