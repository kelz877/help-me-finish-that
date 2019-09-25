import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'

function UserProductDisplay(props){
    const [userProducts, setUserProducts] = useState([])

    const fetchProducts = () => {
        let user_id = props.user_id
        console.log(user_id)
        axios.get(`http://localhost:8080/account/user-products/${user_id}`)
        .then(response => {
            console.log(response.data)
            setUserProducts(response.data)
        })
    }
    useEffect(() => {
        fetchProducts()
    }, [props.user_id])

    const deleteProduct = (id) => {
        fetch('http://localhost:8080/product/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
        .then(response => {
            fetchProducts()
        })
    }

    return (
        <div>
            {userProducts.map(product => {
                return(<div key={product.id}>
                    {/* PICTURE AND TITLE ONLY */}
                    <div>{product.product_name}</div>
                    <img src={product.product_image} style={{width: '10vw', height: 'auto'}} />
                    <div>Product Description: {product.product_description}</div>
                    <div>User Description: {product.user_description}</div>            
                    <div>Quantity: {product.product_qty}</div>
                    <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
                    <Link to={`/product/update-product/${product.id}`}><button>Update Product</button></Link>
                    <div>Product Type/Use: {product.product_type}</div>
                    <br />
                </div>

                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user_id: state.user_id
    }
}

export default connect(mapStateToProps, null )(withRouter(UserProductDisplay))