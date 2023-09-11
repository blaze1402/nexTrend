import React from 'react'

const Order = () => {
  return (
    <div>
      <Grid container sx={{justifyContent :"space-between"}}>
        <Grid item xs ={2.5}>
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5 '>
                <h1 className='font-bold text-lg'>Filter</h1>
            </div>
        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    </div>
  )
}

export default Order
