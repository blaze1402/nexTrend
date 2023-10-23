import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
        case REMOVE_FROM_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.cartItems],
                loading: false
            };

        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                removeCartItem: action.payload,
                loading: false
            };

        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                updateCartItem: action.payload,
                loading: false
            };

        case GET_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                cart: action.payload,
                loading: false
            };

        case ADD_TO_CART_FAILURE:
        case REMOVE_FROM_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
        case GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default cartReducer;
