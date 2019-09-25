import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'


function UpdateProduct(props){
    const [product, setProduct] = useState({product_name: '', product_qty: '', product_type: '', product_image: '', product_description: '', user_description: '', lisitng_expiration: '', user_id: ''})

    const fetchProduct = () => {
        let id = props.match.params.id
        console.log(id)
        fetch(`http://localhost:8080/product/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setProduct({
                ...json
            })
        })
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    const handleUpdate = () => {
        fetch(`http://localhost:8080/product/update-product/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_name: product.product_name,
                product_qty: product.product_qty,
                product_type: product.product_type,
                product_image: product.product_image,
                product_description: product.product_description,
                user_description: product.user_description,
                lisitng_expiration: product.lisitng_expiration,
                user_id: product.user_id
            })
        })
        .then(response => {
            props.history.push('/user-products')
        })
    }
    const handleTextBoxChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    
        return (
            <div>
                                <div>Update Product</div>
                <input type="text" name='product_name' placeholder="Product Name" value={product.product_name} onChange={(e) => handleTextBoxChange(e)} />
                <input type="number" name='product_qty' placeholder="Quantity" value={product.product_qty} onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='product_type' placeholder="Product Type" value={product.product_type} onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='product_image' placeholder="Product Image" value={product.product_image} onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='product_description' placeholder="Product Description" value={product.product_description} onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='user_description' placeholder="User Description" value={product.user_description} onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='lisitng_expiration' placeholder="Listing Expiration" value={product.lisitng_expiration} onChange={(e) => handleTextBoxChange(e)} />
                {/* need to get user id from global state */}
                <input type="number" name='user_id' placeholder="user id" value={product.user_id} onChange={(e) => handleTextBoxChange(e)} />

                <button onClick={() => handleUpdate()}>Update Product</button>
            </div>
        )
    
}

export default withRouter(UpdateProduct)