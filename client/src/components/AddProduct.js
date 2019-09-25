import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'

function AddProduct(props){

    const [product, setProduct] = useState({product_name: '', product_qty: '', product_type: '', product_image: '', product_description: '', user_description: '', lisitng_expiration: '', user_id: ''})


    const handleSave = () => {
        fetch('http://localhost:8080/product/add-product', {
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
            props.history.push("/user-products")
        })
    }
    const handleTextBoxChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    
        return (
            <div>
                <div>Please enter some information about the product you would like help finishing. The more descriptive you can be, the better!</div>
                <input type="text" name='product_name' placeholder="Product Name"  onChange={(e) => handleTextBoxChange(e)} />
                <input type="number" name='product_qty' placeholder="Quantity"  onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='product_type' placeholder="Product Type"  onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='product_image' placeholder="Product Image" onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='product_description' placeholder="Product Description"  onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='user_description' placeholder="User Description"  onChange={(e) => handleTextBoxChange(e)} />
                <input type="text" name='lisitng_expiration' placeholder="Listing Expiration" onChange={(e) => handleTextBoxChange(e)} />
                {/* need to get user id from global state */}
                <input type="number" name='user_id' placeholder="user id" onChange={(e) => handleTextBoxChange(e)} />

                <button onClick={() => handleSave()}>Add Product</button>

            </div>
        )
    

}
export default AddProduct