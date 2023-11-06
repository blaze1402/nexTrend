import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux';
import AdjustIcon from '@mui/icons-material/Adjust';
import PropTypes from 'prop-types';

import { shippedOrder } from '../../State/Admin/Order/Action';

let deliveryDateObject;

const OrderCard = ({ item }) => {
    const dispatch = useDispatch()
    const currentDate = new Date()

    const compareDates = (dateString1, dateString2) => {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
        return date1 <= date2;
    }

    const shipOrder = (givenDate, orderId) => {
        const dateString = new Date(givenDate);
        const targetDate = new Date(dateString.getTime() + (24 * 60 * 60 * 1000));

        const currentTime = new Date().getTime();
        const timeDifference = targetDate - currentTime;
        if (timeDifference > 0) {
            setTimeout(dispatch(shippedOrder(orderId)), timeDifference);
        }
    }

    const formattedDate = (dateString) => {
        const dateObject = new Date(dateString);

        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const month = monthNames[dateObject.getMonth()];
        const day = dateObject.getDate();

        return `${month} ${day}`;
    }


    const deliveryDate = (dateString) => {
        const originalDate = new Date(dateString);
        const deliveryDate = new Date(originalDate);

        deliveryDate.setDate(originalDate.getDate() + 5);
        deliveryDateObject = new Date(deliveryDate);

        return formattedDate(deliveryDateObject);
    }

    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2xl border space-y-1'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item xs={6}>
                    <div className='flex flex-col space-y-2 justify-center'>
                        {item.orderItems.map((item, index) =>
                            <div className='flex items-center cursor-pointer space-x-3' key={index}>
                                <img className='w-[5rem] h-[6.5rem] object-cover object-top' src={item.product.imageUrl} alt='' />
                                <div className='ml-5 space-y-2'>
                                    <p className=''>{item.product.title}</p>
                                    <p className='opacity-50 text-xs font-semibold'>Size: {item.size}</p>
                                    <p className='opacity-50 text-xs font-semibold'>Color: {item.product.color}</p>
                                    <p className='opacity-50 text-xs font-semibold'>Discounted Price: ₹{item.discountedPrice}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='flex flex-col items-center space-y-5'>
                        <div className='text-xs font-semibold space-y-1'>
                            <div className='flex justify-between'>
                                <p>Order Date: </p>
                                <p>{formattedDate(item.createdAt)}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Total Item(s): </p>
                                <p>{item.totalItem}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Total Price: </p>
                                <p>₹ {item.totalPrice}</p>
                            </div>
                            <div className='flex justify-between space-x-5'>
                                <p>Total Discounted Amount: </p>
                                <p>₹ {item.totalDiscountedPrice}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Total Discount: </p>
                                <p>₹ {item.discount}</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>
                                <AdjustIcon sx={{ width: '20px', height: '20px' }} className='text-green-600 mr-2 text-sm' />
                                <span>
                                    {shipOrder(item.orderDate, item.id)}
                                    {compareDates(currentDate, deliveryDateObject)
                                        ? 'Expected Delivery'
                                        : 'Delivered'
                                    } on {deliveryDate(item.orderDate)}
                                </span>
                            </p>
                            <p className='text-xs'>
                                Your item has been {(item.orderStatus).toLowerCase()}
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

OrderCard.propTypes = {
    item: PropTypes.shape({
        product: PropTypes.shape({
            imageUrl: PropTypes.string,
            title: PropTypes.string,
            color: PropTypes.string,
        }),
        size: PropTypes.string,
        discountedPrice: PropTypes.number,
        id: PropTypes.number,
        orderItems: PropTypes.array,
        totalItem: PropTypes.number,
        totalPrice: PropTypes.number,
        totalDiscountedPrice: PropTypes.number,
        discount: PropTypes.number,
        orderDate: PropTypes.string,
        orderStatus: PropTypes.string,
        createdAt: PropTypes.string,
    })
}

export default OrderCard