import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },

  }));
  

function ProductDisplay(props){
    const [products, setProducts] = useState([])
    const classes = useStyles();
    

    useEffect(() => {
        const fetchProducts = () => {
            //console.log(props.user_id)
            const userID = props.user_id
            axios.get(`http://localhost:8080/product/others-products/${userID}`)
            .then(response => {
                //console.log(response.data)
                setProducts(response.data)
            })
        };        
        fetchProducts()
    }, [props.user_id])


    return (
        
            <React.Fragment>
                <CssBaseline />
                <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {products.map(product => {
                        //console.log(product.product_image)
                        return (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                    className={classes.cardMedia}
                                    image={`http://localhost:8080/product/img/users/${product.product_image}`}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.product_name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/product/product-details/${product.id}`} ><Button size="small" color="primary">
                                            View Details
                                        </Button></Link>
                                        <Link to={`/product/product-details/${product.id}`} ><Button size="small" color="primary">
                                            I want to finish this!
                                        </Button></Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
                </Container>

            </React.Fragment>

    )
}
const mapStateToProps = (state) => {
    return {
        user_id: state.user_id
    }
}

export default connect(mapStateToProps, null)(ProductDisplay)