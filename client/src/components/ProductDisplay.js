import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'

function ProductDisplay(props){
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get('http://localhost:8080/product')
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
    }
    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div>
            {products.map(product => {
                return(<div key={product.id}>
                    {/* PICTURE AND TITLE ONLY */}
                    <div>{product.product_name}</div>
                    <img src={product.product_image} style={{width: '10vw', height: 'auto'}} />
                    <Link to={`/product/product-details/${product.id}`}><button>View Details</button></Link>
                    </div>

                )
            })}
        </div>
    )
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getProductDetails: (id) => dispatch({payload: id, type: 'PRODUCT_DETAILS'})
//     }
// }

export default ProductDisplay