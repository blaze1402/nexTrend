import api from "../../config/apiConfig";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

// Action for adding item to cart
export const addToCart = (reqData) => async (dispatch) => {

    dispatch({ type: ADD_TO_CART_REQUEST });
    try {
        const { data } = await api.put(`/api/cart/add`, reqData)
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: error.message })
    }
};

// Action for removing from cart item
export const removeCartItem = (cartItemId) => async (dispatch) => {

    dispatch({ type: REMOVE_FROM_CART_REQUEST });
    try {
        await api.delete(`/api/cart_items/${cartItemId}`)
        dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: cartItemId })
    } catch (error) {
        dispatch({ type: REMOVE_FROM_CART_FAILURE, payload: error.message })
    }
};

// Action for updating cart item
export const updateCartItem = (reqData) => async (dispatch) => {

    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
        const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data)
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
        // console.log(data) TODO: Fix this
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
};

// Action for getting cart
export const getCart = () => async (dispatch) => {

    dispatch({ type: GET_CART_REQUEST });
    try {
        const { data } = await api.get(`/api/cart/`)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
};
