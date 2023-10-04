import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>
                {[1, 1, 1, 1, 1].map((item) => <Grid key={item} item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: 'space-between' }}>

                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[6.5rem] object-cover object-top' src='https://offduty.in/cdn/shop/products/cb2ceae6-7387-478d-84b3-2df61d6c3518_540x.jpg?v=1676892572' alt='' />

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Relaxed Fit Cargo Men Jeans</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: Mid Blue</span> <span>Size: 30</span></p>
                                <p>Seller: Off Duty India</p>
                                <p>₹1750</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>

                            <StarBorderIcon sx={{ fontSize: '2rem' }} className='px-2' />
                            <span>Rate & Review Product </span>
                        </Box>

                    </Grid>

                </Grid>)}


            </Grid>
        </div>
    )
}

export default OrderDetails