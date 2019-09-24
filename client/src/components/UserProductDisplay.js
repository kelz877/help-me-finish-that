import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
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
                    <button>Show Details</button>
                    </div>

                )
            })}
        </div>
    )
}

export default ProductDisplay