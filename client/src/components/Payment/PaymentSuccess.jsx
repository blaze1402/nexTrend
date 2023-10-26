import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Alert, AlertTitle, Grid } from '@mui/material'

import OrderTracker from "../Order/OrderTracker"
import { getOrderById } from "../../State/Order/Action"
import { updatePayment } from "../../State/Payment/Action"
import AddressCard from "../AddressCard/AddressCard"

const PaymentSuccess = () => {
    const dispatch = useDispatch()
    const { order } = useSelector(store => store)

    const [paymentId, setPaymentId] = useState()
    const [referenceId, setReferenceId] = useState()
    const [paymentStatus, setPaymentStatus] = useState()
    const { orderId } = useParams()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        
        setPaymentId(urlParams.get('razorpay_payment_id'))
        setPaymentStatus(urlParams.get('razorpay_payment_link_status'))
    }, [])

    useEffect(() => {
        const data = { orderId, paymentId }
        dispatch(getOrderById(orderId))
        dispatch(updatePayment(data))
    }, [paymentId, orderId])

    return (
        <div className="px-2 lg:px-36">
            <div className="flex flex-col justify-center items-center">
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Successful</AlertTitle>
                    Congratulations! Your order has been placed.
                </Alert>

            </div>

            <OrderTracker activeStep={1} />

            <Grid container className="space-y-5 py-5 pt-20">

                {order.order?.orderItems.map((item) =>
                    <div key={item.id} className='w-full p-5 my-5 shadow-lg border rounded-md'>
                        <div className='flex items-center justify-between mb-2'>
                            <div className="flex items-center ">
                                <Link to={`/product/${item.product.id}`}>
                                    <div className='w-[7rem] h-[7rem]'>
                                        <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt={item.product.title} />
                                    </div>
                                </Link>

                                <div className='ml-5 space-y-1'>
                                    <Link to={`/product/${item.product.id}`}>
                                        <p className='font-semibold'>{item.product.title}</p>
                                    </Link>
                                    <div className="flex space-x-5">
                                        <p className='opacity-70'>Color: {item.product.color}</p>
                                        <p className='opacity-70'>Size: {item.size}</p>
                                        <p className='opacity-70'>Quantity: {item.quantity}</p>
                                    </div>
                                    <p className='opacity-70 mt-2'>Seller: {item.product.brand}</p>
                                    <div className='flex space-x-5 items-center text-gray-900'>
                                        <p className='font-semibold'>₹{item.discountedPrice}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end space-x-5 pt-2">
                                <p className='font-semibold self-start'>Delivery Address:</p>
                                <AddressCard address={order.order?.shippingAddress} />
                            </div>
                        </div>
                    </div>)}

            </Grid>

        </div>
    )
}

export default PaymentSuccess