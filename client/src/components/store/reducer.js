const initialState = {
    products: [],
    isAuthenticated: true,
    product_id: null,
    user_id: 2

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        // case 'PRODUCT_DETAILS':
        //     return {
        //         ...state,
        //         product_id: action.payload
        //     }
        case 'LOGGED_IN_USER_ID':
            return {
                ...state,
                user_id: action.payload
            }
        default: 
            return {
                ...state
            }

    }
}

export default reducer