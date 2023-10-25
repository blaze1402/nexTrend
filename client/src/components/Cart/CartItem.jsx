import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { removeCartItem, updateCartItem } from '../../State/Cart/Action';

const CartItem = ({ item, summary }) => {
  const dispatch = useDispatch()

  const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?.id }
    dispatch(updateCartItem(data))
    console.log(data, num)
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id))
  }

  return (
    <div className='p-5 my-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <Link to={`/product/${item.product.id}`}>
          <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt={item.product.title} />
          </div>
        </Link>

        <div className='ml-5 space-y-1'>
          <Link to={`/product/${item.product.id}`}>
            <p className='font-semibold'>{item.product.title}</p>
          </Link>
          <p className='opacity-70'>Size {item.size}, {item.product.color}</p>
          <p className='opacity-70 mt-2'>Seller: {item.product.brand}</p>
          <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='opacity-50 line-through'>₹{item.price}</p>
            <p className='font-semibold'>₹{item.discountedPrice}</p>
            <p className='text-green-600 font-semibold'>{item.product.discountPercent}% Off</p>
          </div>

          {!summary ?
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
              <div className='flex items-center space-x-2'>
                <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                <IconButton
                  sx={{ color: "RGB{145 85 253}" }}
                  onClick={() => handleUpdateCartItem(1)}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <div>
                <Button onClick={handleRemoveCartItem} sx={{ color: "RGB{145 85 253}" }}>remove</Button>
              </div>
            </div>
            : <p className='opacity-70 pt-4'>Quantity: <span className='font-semibold'>{item.quantity}</span></p>
          }
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      discountPercent: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  summary: PropTypes.bool,
};

export default CartItem