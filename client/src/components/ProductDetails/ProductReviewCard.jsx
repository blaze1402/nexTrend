import { Grid, Box, Avatar, Rating } from '@mui/material'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text:white' sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>
                            R
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div className=''>
                            <p className='font-semibold text-lg'>Ram</p>
                            <p className='opacity-70'>August 5, 2023</p>
                        </div>
                    </div>
                    <Rating value={4.5} name='half-rating' readOnly precision={.5} />
                    <p>Nice product, loved the shirt.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard