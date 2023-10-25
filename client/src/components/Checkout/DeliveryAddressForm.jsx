import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import AddressCard from '../AddressCard/AddressCard'
import { createOrder } from '../../State/Order/Action';

const DeliveryAddressForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(store => store)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get('lastName'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip'),
            mobile: data.get('phoneNumber')
        }

        const orderData = { address, navigate }
        dispatch(createOrder(orderData))
    }

    return (
        <div className='-mt-12 mb-7'>
            <Grid container spacing={4} >
                <Grid item xs={12} lg={5}>
                    <div className='h-[542px] border rounded-md shadow-md p-5 overflow-y-scroll'>
                        <p className='text-2xl font-semibold pb-5 text-gray-700'>Saved addresses:</p>
                        {auth.user?.address.map((address) =>
                            <div
                                key={address.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const orderData = { address, navigate }
                                    dispatch(createOrder(orderData))
                                }}
                                className='border rounded-md shadow-md p-3 mb-5 hover:cursor-pointer hover:bg-slate-50' >
                                <AddressCard address={address} />
                            </div>)}
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>

                    <Box className="border rounded-md shadow-md p-5">

                        <form onSubmit={handleSubmit}>
                            <p className='text-2xl font-semibold pb-5 text-gray-700'>Enter address details:</p>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label='Address'
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label='City'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label='State/Region'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label='Pincode'
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label='Phone Number'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button
                                        sx={{ py: 1, mt: 2, bgcolor: "RGB(145 85 253)" }}
                                        size='large'
                                        variant='contained'
                                        type='submit'>
                                        Deliver Here
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm