import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import CartItem from './CartItem'
import { getCart } from '../../State/Cart/Action';

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cart } = useSelector(store => store)

  const handleCheckout = () => {
    navigate('/checkout?step=2')
  }

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch, cart.removeCartItem, cart.updateCartItem])

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {cart.cart?.cartItems.length === 0 ? <p className='font-bold text-gray-700 text-3xl'>Cart is empty! ☹</p> :
            cart.cart?.cartItems.map((item) => <CartItem item={item} key={item.id} />)}
        </div>

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-4'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-5'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className='flex justify-between text-black'>
                <span >Discount</span>
                <span className='text-green-600'>-₹{cart.cart?.discount}</span>
              </div>
              <div className='flex justify-between text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between text-black'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
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

export default Cart