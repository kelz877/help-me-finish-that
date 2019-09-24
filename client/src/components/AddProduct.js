import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class AddProduct extends Component{
    constructor(props){
        super(props)

        this.state = {
            product_name: '',
            product_qty: '',
            product_type: '',
            product_image: '',
            product_description: '',
            user_description: '',
            lisitng_expiration: '',
            user_id: ''

        }
    }
    handleSave = () => {
        fetch('http://localhost:8080/product/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_name: this.state.product_name,
                product_qty: this.state.product_qty,
                product_type: this.state.product_type,
                product_image: this.state.product_image,
                product_description: this.state.product_description,
                user_description: this.state.user_description,
                lisitng_expiration: this.state.lisitng_expiration,
                user_id: this.state.user_id
            })
        }).then(response => {
            this.setState({
                product_name: '',
                product_qty: '',
                product_type: '',
                product_image: '',
                product_description: '',
                user_description: '',
                lisitng_expiration: '',
                user_id: ''
            })
        })
        .then(response => {
            this.props.history.push("/product-display")
        })
    }
    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div>Please enter some information about the product you would like help finishing. The more descriptive you can be, the better!</div>
                <input type="text" name='product_name' placeholder="Product Name" value={this.state.product_name} onChange={this.handleTextBoxChange} />
                <input type="number" name='product_qty' placeholder="Quantity" value={this.state.product_qty} onChange={this.handleTextBoxChange} />
                <input type="text" name='product_type' placeholder="Product Type" value={this.state.product_type} onChange={this.handleTextBoxChange} />
                <input type="text" name='product_image' placeholder="Product Image" value={this.state.product_image} onChange={this.handleTextBoxChange} />
                <input type="text" name='product_description' placeholder="Product Description" value={this.state.product_description} onChange={this.handleTextBoxChange} />
                <input type="text" name='user_description' placeholder="User Description" value={this.state.user_description} onChange={this.handleTextBoxChange} />
                <input type="text" name='lisitng_expiration' placeholder="Listing Expiration" value={this.state.lisitng_expiration} onChange={this.handleTextBoxChange} />
                {/* need to get user id from global state */}
                <input type="number" name='user_id' placeholder="user id" value={this.state.user_id} onChange={this.handleTextBoxChange} />

                <button onClick={this.handleSave}>Add Product</button>

            </div>
        )
    }

}
export default withRouter(AddProduct)