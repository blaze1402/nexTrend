import api from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_ALL_PRODUCTS_FAILURE, FIND_ALL_PRODUCTS_REQUEST, FIND_ALL_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

// Action to find a product by ID
export const findProductById = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { productId } = reqData;
    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
};


// Action to find all products
export const findAllProducts = () => async (dispatch) => {

    dispatch({ type: FIND_ALL_PRODUCTS_REQUEST });

    try {
        const { data } = await api.get(`/api/admin/products/all`)
        dispatch({ type: FIND_ALL_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_ALL_PRODUCTS_FAILURE, payload: error.message })
    }
};

// Action to find products by category
export const findProducts = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
};

// Action to find a product by ID
export const createProduct = (product) => async (dispatch) => {

    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data } = await api.post(`/api/admin/products`, product.data)
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })
    }
};

// Action to find a product by ID
export const deleteProduct = (productId) => async (dispatch) => {

    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        await api.delete(`/api/admin/products/${productId}/delete`)
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId })

    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message })
    }
};
