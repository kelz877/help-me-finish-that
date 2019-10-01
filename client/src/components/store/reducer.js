const initialState = {
    products: [],
    isAuthenticated: true,
    product_id: null,
    user_id: 5,
    username: ""

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        // case 'PRODUCT_DETAILS':
        //     return {
        //         ...state,
        //         product_id: action.payload
        //     }
        case 'ON_AUTHENTICATED':
            return{
                ...state,
                isAuthenticated: action.token ? true : false
            }
        case 'LOGGED_IN_USER_ID':
            return {
                ...state,
                user_id: action.payload
            }
        case 'LOGGED_IN_USERNAME':
            return {
                ...state, 
                username: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isAuthenticated: false
            }
        default: 
            return {
                ...state
            }

    }
}

export default reducer