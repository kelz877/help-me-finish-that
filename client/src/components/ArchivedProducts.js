import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
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

function ArchivedProductDisplay(props){
    const [archivedProducts, setArchivedProducts] = useState([])
    const classes = useStyles();

    
    useEffect(() => {
        const fetchProducts = () => {
                let user_id = props.user_id
                console.log(user_id)
                axios.get(`http://localhost:8080/product/user-products/archived/${user_id}`)
                .then(response => {
                    console.log(response.data)
                    setArchivedProducts(response.data)
                })
            }        


        fetchProducts()
    }, [props.user_id])

   
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {archivedProducts.map(product => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia 
                            className={classes.cardMedia}
                            image={product.product_image}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2">
                                    {product.product_name}
                                </Typography>
                                <Typography paragraph>
                                    {product.product_description}
                                </Typography>
                                <Typography paragraph>
                                    {product.user_description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Quantity: {product.product_qty} Listing Expiration: {product.lisitng_expiration}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" >Activate Product</Button>
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

export default connect(mapStateToProps, null )(withRouter(ArchivedProductDisplay))