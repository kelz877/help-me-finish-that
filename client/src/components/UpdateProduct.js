import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    root: {
        flexGrow: 1,
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

function UpdateProduct(props){
    const classes = useStyles();
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
        let id = props.match.params.id
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

            <Container className={classes.container} maxWidth="sm">
            <CssBaseline />
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                id="outlined-name"
                label="Product Name"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name='product_name'
                value={product.product_name}
                onChange={(e) => handleTextBoxChange(e)} 
        /></Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                maxWidth="sm"
                id="outlined-number"
                label="Product Quantity"
                type="number"
                fullWidth
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="outlined"
                name='product_qty'
                value={product.product_qty}
                onChange={(e) => handleTextBoxChange(e)} 
            /></Grid>

            <Grid item xs={12}>
            <TextField
                id="outlined-textarea"
                label="Product Description"
                placeholder="Product Description"
                multiline
                fullWidth
                className={classes.textField}
                margin="normal"
                variant="outlined"
                name='product_description'
                value={product.product_description}
                onChange={(e) => handleTextBoxChange(e)} 
                /></Grid>
                <Grid item xs={12}>
            <TextField
                id="outlined-textarea"
                label="User Description"
                placeholder="User Description"
                multiline
                fullWidth
                className={classes.textField}
                helperText="Please be as descriptive as possible!"
                margin="normal"
                variant="outlined"
                name='user_description'
                value={product.user_description}
                onChange={(e) => handleTextBoxChange(e)} 
                /></Grid>
                <Grid item xs={12} sm={6}>
            <TextField
                id="outlined-name"
                label="Listing Expiration"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText="The date you would like to remove the listing"
                name='lisitng_expiration'
                value={product.lisitng_expiration}
                fullWidth
                onChange={(e) => handleTextBoxChange(e)} 
                /></Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                id="outlined-name"
                label="Product Type"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name='product_type'
                value={product.product_type}
                onChange={(e) => handleTextBoxChange(e)} 
            /></Grid>
            <TextField
                id="outlined-name"
                label="Product Image"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText="Add an Image of the Product!"
                name='product_image'
                value={product.product_image}
                onChange={(e) => handleTextBoxChange(e)} 
                />
            <TextField
                id="outlined-name"
                label="user id"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText="remove this field"
                name='user_id'
                value={product.user_id}
                onChange={(e) => handleTextBoxChange(e)} 
                />
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => handleUpdate()}>
                    Update Product
                </Button>
            </Container>
            // <div>
                        
            //     <input type="text" name='product_name' placeholder="Product Name" value={product.product_name} onChange={(e) => handleTextBoxChange(e)} />

            //     <input type="number" name='product_qty' placeholder="Quantity" value={product.product_qty} onChange={(e) => handleTextBoxChange(e)} />

            //     <input type="text" name='product_type' placeholder="Product Type" value={product.product_type} onChange={(e) => handleTextBoxChange(e)} />

            //     <input type="text" name='product_image' placeholder="Product Image" value={product.product_image} onChange={(e) => handleTextBoxChange(e)} />

            //     <input type="text" name='product_description' placeholder="Product Description" value={product.product_description} onChange={(e) => handleTextBoxChange(e)} />

            //     <input type="text" name='user_description' placeholder="User Description" value={product.user_description} onChange={(e) => handleTextBoxChange(e)} />

            //     <input type="text" name='lisitng_expiration' placeholder="Listing Expiration" value={product.lisitng_expiration} onChange={(e) => handleTextBoxChange(e)} />

                
                
            //     <input type="number" name='user_id' placeholder="user id" value={product.user_id} onChange={(e) => handleTextBoxChange(e)} />


            //     <button onClick={() => handleUpdate()}>Update Product</button>
            // </div>
        )
    
}

export default withRouter(UpdateProduct)