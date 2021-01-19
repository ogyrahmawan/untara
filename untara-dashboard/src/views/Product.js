import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProduct } from '../redux/actions/productAction'
import AddProduct from '../components/addProduct'
import TableBody from '../components/tableBody'

const ProductPage = (props) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.data)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])
    return (
        <div className="container">
            <AddProduct></AddProduct>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Desc</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <TableBody product={product}></TableBody>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage