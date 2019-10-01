import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

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
    const [product, setProduct] = useState({product_name: '', product_qty: '', product_type: '', product_image: '', product_description: '', user_description: '', lisitng_expiration: '', user_id: props.user_id})


    useEffect(() => {
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
        fetchProduct()
    }, [props.match.params.id])

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
                user_id: props.user_id
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

        )
    
}
const mapStateToProps = (state) => {
    return {
        user_id: state.user_id
    }
}

export default connect(mapStateToProps, null)(UpdateProduct)