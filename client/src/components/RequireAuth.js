import React, {Component} from 'react'
import {connect} from 'react-redux'

//higher order component which takes in another componennt
export default function(ComposedComponent){
    class Authenticate extends Component{
        constructor(props){
            super(props)
            if(!this.props.isAuthenticated){
                this.props.history.push('/login')
            }
        }
        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.isAuthenticated
        }
    }
    return connect(mapStateToProps)(Authenticate)
}