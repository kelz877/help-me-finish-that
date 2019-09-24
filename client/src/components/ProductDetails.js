import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';

function ProductDetails(props){
    const [details, setDetails] = useState({})


    const fetchProductDetails = () => {
        let id = props.match.params.id
        console.log(id)
        axios.get(`http://localhost:8080/product/${id}`)
        .then(response => {
            console.log(response.data)
            setDetails(response.data)
        })
    }


    useEffect(() => {
        console.log("test")
        fetchProductDetails()
    }, [props.id])

    return (
        <div>
            <img src={details.product_image} style={{width: '50vw', height: 'auto'}} />
            <div>Product Name: {details.product_name}</div>
            <div>Product Description: {details.product_description}</div>
            <div>User Description: {details.user_description}</div>            
            <div>Quantity: {details.product_qty}</div>
            <div>Product Type/Use: {details.product_type}</div>

        </div>
    )
}

export default ProductDetails