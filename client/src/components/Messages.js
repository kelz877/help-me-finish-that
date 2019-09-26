import React, { useState, useEffect } from "react";
import{connect} from 'react-redux'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },

  messageSplit: {
    borderBottom: `1px solid ${theme.palette.divider}`

  }
}));




//display user messages on  the page. Two grabs and 2 displays

function UserMessageDisplay(props){
    //my incoming messages
    const [incomings, setIncoming] = useState([])
   //my outgoing messages
   const [outgoings, setOutgoing] = useState([])
   const classes = useStyles();


    const fetchMyMessages = () => {
        let user_id = props.user_id
        console.log(user_id)
        axios.get(`http://localhost:8080/deals/my-deals/${user_id}`)
        .then(response => {
            setIncoming(response.data)
        }).then(axios.get(`http://localhost:8080/deals/my-finishes/${user_id}`)
        .then(response => {
            //console.log(response.data)
            setOutgoing(response.data)
        }))
    }
    useEffect(() => {
        fetchMyMessages()
        
    }, [props.user_id])

    return (
        <Container>
            <CssBaseline /> 
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3" className={classes.messageSplit}>
                    My Received Messages
                </Typography>
                {incomings.map(incoming => {
                return (<div key={incoming.id} className={classes.messageSplit}>
                    <Typography component="p">
                        Product Name: {incoming.Product.product_name}
                    </Typography>   
                    <Typography component="p">
                        Message: {incoming.message}
                    </Typography>  
                    <Typography component="p">
                        Message Was Sent By: {incoming.Product_Buyer.username}
                    </Typography>  
                    </div> 
                )
            })}
            </Paper>  
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3" className={classes.messageSplit}>
                    My Sent Messages
                </Typography>
                {outgoings.map(outgoing => {
                return (<div key={outgoing.id} className={classes.messageSplit}>
                    <Typography component="p">
                        Product Name: {outgoing.Product.product_name}
                    </Typography>   
                    <Typography component="p">
                        Message: {outgoing.message}
                    </Typography>  
                    <Typography component="p">
                        Message Was Sent To: {outgoing.Product_Owner.username}
                    </Typography>  
                    </div> 
                )
            })}
            </Paper> 
        </Container>
    )

}

const mapStateToProps = (state) => {
    return {
        user_id: state.user_id
    }
}
export default connect(mapStateToProps, null)(UserMessageDisplay)