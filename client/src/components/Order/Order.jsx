import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterListIcon from '@mui/icons-material/FilterList';

import { getOrderHistory } from '../../State/Order/Action'
import OrderCard from './OrderCard'

const orderStatus = [
  { lable: "On The Way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancel", value: "cancelled" },
  { lable: "Returned", value: "returned" },
]

const Order = () => {
  const dispatch = useDispatch()

  const { orders } = useSelector((store) => store.order)

  const sortedOrders = orders.map(item => {
    item.parsedDate = new Date(item.createdAt);
    return item;
  }).sort((a, b) => b.parsedDate - a.parsedDate);


  useEffect(() => {
    dispatch(getOrderHistory())
  }, [orders.length])


  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx={{ justifyContent: 'space-between' }}>

        <Grid item xs={2.5}>
          <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
            <div className="flex justify-between items-center">
              <h1 className="text-lg  opacity-50 font-bold">Filters</h1>
              <FilterListIcon />
            </div>
            <div className='space-y-4 mt-10'>
              <h1 className='font-semibold'>ORDER STATUS</h1>
              {orderStatus.map((option) => <div key={option.value} className='flex items-center'>
                <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                  {option.lable}
                </label>
              </div>)}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className='space-y-5 mb-10'>
            {sortedOrders.map((item) => <OrderCard key={item.id} item={item} />)}
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Order