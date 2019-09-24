const initialState = {
    products: [],
    isAuthenticated: false,
    product_id: null

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        // case 'PRODUCT_DETAILS':
        //     return {
        //         ...state,
        //         product_id: action.payload
        //     }
        default: 
            return {
                ...state
            }

    }
}

export default reducer