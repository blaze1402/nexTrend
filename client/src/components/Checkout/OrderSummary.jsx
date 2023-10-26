import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '@mui/material'

import CartItem from '../Cart/CartItem'
import AddressCard from '../AddressCard/AddressCard'
import { getOrderById } from '../../State/Order/Action'
import { createPayment } from '../../State/Payment/Action'

const OrderSummary = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { order } = useSelector(store => store)

  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get('order_id')

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCheckout = () => {
    dispatch(createPayment(orderId))
  }

  return (
    <div className='-mt-7'>
      <div className='p-5 shadow-lg rounded-md border'>
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className='lg:grid grid-cols-3 my-5 relative'>
        <div className='col-span-2'>
          {order.order?.orderItems.map((item) => <CartItem item={item} key={item.id} summary={true} />)}
        </div>

        <div className='pl-5 sticky top-0 h-[100vh] mt-5 lg:mt-5'>
          <div className='border p-4 rounded-md'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-5'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className='flex justify-between text-black'>
                <span >Discount</span>
                <span className='text-green-600'>-₹{order.order?.discount}</span>
              </div>
              <div className='flex justify-between text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between text-black'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
              </div>

            </div>
            <Button onClick={handleCheckout} variant='contained' className='w-full ' sx={{ px: '5rem', py: '0.4rem', bgcolor: '#9155fd' }}>
              Checkout
            </Button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default OrderSummary