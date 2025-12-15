import CardActionsTypes from "./action-types"

const initialState = {
    products:  [],
    productsTotalPrice: 0
}

const CardReducer = (state = initialState, action) => {
    switch(action.type){

        case CardActionsTypes.ADD_PRODUCT:
            const productIsAleradyInCart = state.products.some(product => product.id === action.payload.id)

            if(productIsAleradyInCart){
                return {...state, products: state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1}: product)}
            }
            return {
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}]
            }

        case CardActionsTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload )
            }

        case CardActionsTypes.ADD_QTDE_PRODUCT: 
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload ? 
                    {...product, quantity: product.quantity + 1} : product)
            }

        case CardActionsTypes.DEC_QTDE_PRODUCT:
            return{
                ...state,
                products: state.products.map(product => product.id === action.payload ? 
                    {...product, quantity: product.quantity - 1}
                    :product
                ).filter(product => product.quantity > 0)
            }

        default: 
            return state
    }
}

export default CardReducer