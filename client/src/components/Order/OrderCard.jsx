import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>

                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[6.5rem] object-cover object-top' src='https://offduty.in/cdn/shop/products/cb2ceae6-7387-478d-84b3-2df61d6c3518_540x.jpg?v=1676892572' alt='' />
                        <div className='ml-5 space-y-2'>

                            <p className=''>Relaxed Fit Cargo Men Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: 30</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Mid Blue</p>

                        </div>
                    </div> 

                </Grid>

                <Grid item xs={2}>
                    <p>₹1750</p>

                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                        <AdjustIcon sx={{width:'15px',height:'15px'}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered on September 15
                        </span>   
                    </p>
                    <p className='text-xs'>
                        Your Item Has Been Delivered
                    </p>

                    </div>} 
                    {false && <p>
                        <span>
                            Expected Delivery on September 15
                        </span>
                    </p>}

                </Grid>



            </Grid>
        </div>
    )
}

export default OrderCard