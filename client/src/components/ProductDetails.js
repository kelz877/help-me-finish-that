import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


  
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: '70vw',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    container: {
        maxWidth: '70%',
    },

    
  }));
  
function ProductDetails(props){
    const classes= useStyles();
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
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardHeader title={details.product_name} subheader={details.lisitng_expiration} />
                <CardMedia
                className={classes.media}
                image={details.product_image}
                />
                <CardContent>
                    <Typography paragraph>
                        Product Description: {details.product_description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        User Description: {details.user_description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Product Quantity: {details.product_qty}
                    </Typography>
                </CardContent>

            </Card>
        
        </Container>
    )
}

export default ProductDetails