import api from "../../../config/apiConfig"
import { CANCELLED_ORDERS_FAILURE, CANCELLED_ORDERS_REQUEST, CANCELLED_ORDERS_SUCCESS, CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUEST, CONFIRMED_ORDERS_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDERS_FAILURE, PLACED_ORDERS_REQUEST, PLACED_ORDERS_SUCCESS, SHIPPED_ORDER_FAILURE, SHIPPED_ORDER_REQUEST, SHIPPED_ORDER_SUCCESS } from "./ActionType"

export const getOrders = () => async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST })

    try {
        const { data } = await api.get('/api/admin/orders/')
        dispatch({ type: GET_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILURE, payload: error.message })
    }
}

export const confirmedOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDERS_REQUEST })

    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/confirmed`)
        dispatch({ type: CONFIRMED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: CONFIRMED_ORDERS_FAILURE, payload: error.message })
    }
}

export const shippedOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIPPED_ORDER_REQUEST })

    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/ship`)
        dispatch({ type: SHIPPED_ORDER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: SHIPPED_ORDER_FAILURE, payload: error.message })
    }
}

export const deliveredOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDERS_REQUEST })

    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`)
        dispatch({ type: DELIVERED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: DELIVERED_ORDERS_FAILURE, payload: error.message })
    }
}

export const cancelledOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CANCELLED_ORDERS_REQUEST })

    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/cancel`)
        dispatch({ type: CANCELLED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: CANCELLED_ORDERS_FAILURE, payload: error.message })
    }
}

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST })

    try {
        const { data } = await api.delete(`/api/admin/orders/${orderId}/delete`)
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message })
    }
}

export const placedOrder = (orderId) => async (dispatch) => {
    dispatch({ type: PLACED_ORDERS_REQUEST })

    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/placed`)
        dispatch({ type: PLACED_ORDERS_SUCCESS, payload: data })
        console.log(data)
    } catch (error) {
        dispatch({ type: PLACED_ORDERS_FAILURE, payload: error.message })
    }
}