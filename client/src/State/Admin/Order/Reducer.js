import { CANCELLED_ORDERS_FAILURE, CANCELLED_ORDERS_REQUEST, CANCELLED_ORDERS_SUCCESS, CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUEST, CONFIRMED_ORDERS_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDERS_FAILURE, PLACED_ORDERS_REQUEST, PLACED_ORDERS_SUCCESS, SHIPPED_ORDER_FAILURE, SHIPPED_ORDER_REQUEST, SHIPPED_ORDER_SUCCESS } from "./ActionType";

// Define the initial state of the order
const initialState = {
    orders: [],
    loading: false,
    error: ""
};

// Define the reducer function
const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
        case CONFIRMED_ORDERS_REQUEST:
        case PLACED_ORDERS_REQUEST:
        case DELIVERED_ORDERS_REQUEST:
        case CANCELLED_ORDERS_REQUEST:
        case DELETE_ORDER_REQUEST:
        case SHIPPED_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: ""
            };
        case CONFIRMED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmed: action.payload,
            };
        case PLACED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                placed: action.payload,
            };
        case DELIVERED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                delivered: action.payload,
            };
        case CANCELLED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                cancelled: action.payload,
            };
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                deletedOrder: action.payload
            };
        case SHIPPED_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                shipped: action.payload
            };

        case GET_ORDERS_FAILURE:
        case CONFIRMED_ORDERS_FAILURE:
        case PLACED_ORDERS_FAILURE:
        case DELIVERED_ORDERS_FAILURE:
        case CANCELLED_ORDERS_FAILURE:
        case DELETE_ORDER_FAILURE:
        case SHIPPED_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default adminOrderReducer;
