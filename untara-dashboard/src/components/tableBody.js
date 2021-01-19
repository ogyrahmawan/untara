import React from "react"
import {useDispatch} from 'react-redux'
import { deleteProduct } from "../redux/actions/productAction"
import EditProduct from "./editProduct"

const TableBody = ({product}) => {
    const dispatch = useDispatch()

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <>
        <tr key={product.id}>
            <td>
                <img src={product.image} style={{width: "20vw", height: '20vw'}} alt={`number ${product.id}`}></img>
            </td>
            <td>{product.name}</td>
            <td>{product.note}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                <EditProduct product={product}></EditProduct>
            </td>
        </tr>
        </>
    )
}

export default TableBody