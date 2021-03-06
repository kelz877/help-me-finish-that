import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';



  
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: '70vw',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain'
    },
    container: {
        maxWidth: '70%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },  
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },

    
  }));
  
function ProductDetails(props){
    const classes= useStyles();
    const [details, setDetails] = useState({})
    const [message, setMessage] = useState({})
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };



    useEffect(() => {
      const fetchProductDetails = () => {
        let id = props.match.params.id
        
        axios.get(`http://localhost:8080/product/${id}`)
        .then(response => {
            console.log(response.data)
            const itemInfo = response.data
            setDetails(itemInfo)
            console.log(itemInfo) 
        })
    };
        fetchProductDetails()
    },[props.match.params.id])

    const handleSave = () => {
      let product_buyer_id = props.user_id
      let product_id = props.match.params.id
      let product_owner_id = details.user_id
      //console.log(product_owner_id)
      
      fetch('http://localhost:8080/deals/add-deal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message.message,
          product_owner_id: product_owner_id, 
          product_buyer_id: product_buyer_id,
          product_id: product_id
        })
      })
      .then(fetch(`http://localhost:8080/product/user-products/archived/${product_id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          item_active : false,
          inactivate_reason: "user made a deal"
        })
      }))
      .then(response => {
        props.history.push('/user-products')
      })
    }

    const handleTextBoxChange = (e) => {
      setMessage({
        ...message,
        [e.target.name]: e.target.value
      })
    }
// image != null ? return image : return placeholder
    return (
        
        <Container className={classes.container}>
          {console.log(details)}
          <Card className={classes.card}>
            <CardHeader title={details.product_name} subheader={details.lisitng_expiration} />
            <CardMedia
            className={classes.media}
            image={`http://localhost:8080/product/img/users/${details.product_image}` }
            backgroundSize='contain'
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
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Message User For More Information! </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body2" color="textSecondary" component="p">
            Send the owner of the product a message to connect and figure out how you can help them finish that! <br />
            <br />Message From: {props.username}
          </Typography>
          
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
            <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            fullWidth
            rows="4"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            name="message"
            onChange={(e) => handleTextBoxChange(e)}
        />
          <input 
          type="hidden"
          name="product_owner_id" 
          value={details.user_id} />
          <Button size="small" color="primary"
          onClick={() => handleSave()}>
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>



            </Card>


        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        user_id: state.user_id

    }
}

export default connect(mapStateToProps, null)(ProductDetails)