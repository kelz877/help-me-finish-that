// import React from 'react'
// import {NavLink, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'


// //

// function Navigation(props){
    
//     const handleSignOut = () => {
//         //remove json webtoken from local storage
//         localStorage.removeItem("jsonwebtoken")
//         //update global state to set is authenticated to false
//         props.onSignOut();
//         props.history.push('/login')
//     }


//     return (
//         <div>
//             <NavLink to='/login'>Login</NavLink>
//             <NavLink to='/register'>Register</NavLink> 
//             {/* {props.authenticated ? <NavLink to=''>Dashboard</NavLink>} */}
//             <NavLink to='/'>Dashboard</NavLink>
//             {props.authenticated ? <li><a href="#" onClick={() => handleSignOut()} >Log Out</a></li> : null}
//         </div>
//     )

// }

// const mapStateToProps = (state) => {
//     return {
//         authenticated: state.isAuthenticated //is authenticated is coming from global redux state
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSignOut: () => dispatch({type: "SIGN_OUT"})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))