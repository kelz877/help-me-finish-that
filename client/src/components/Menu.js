import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function Menu(props){


    return (
        <div>
            {/* add authenticated to the links */}
            
            <NavLink to='#'>Products</NavLink>
            <NavLink to='/product-display'>My Products</NavLink>
            <NavLink to='#'>Add Product</NavLink>            
            <NavLink to='#'>Produce</NavLink>
            <NavLink to='#'>Tasks</NavLink>
            <NavLink to='#'>Users</NavLink>
            <NavLink to='#'>Discussion</NavLink>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(withRouter(Menu))
