import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function Menu(props){


    return (
        <div>
            {/* add authentication to the links */}
            
            <NavLink to='/product-display'>Products</NavLink>
            <NavLink to='/user-products'>My Products</NavLink>
            <NavLink to='/add-product'>Add Product</NavLink>            
            <NavLink to='/coming-soon'>Produce</NavLink>
            <NavLink to='/coming-soon'>Tasks</NavLink>
            <NavLink to='/coming-soon'>Users</NavLink>
            <NavLink to='/coming-soon'>Discussion</NavLink>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(withRouter(Menu))
