import { Grid } from '@mui/material'

import Achievement from './Achievement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableView from '../View/OrdersTableView'
import ProductsTableView from '../View/ProductsTableView'

const Dashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
          <Achievement />
        </Grid>
        <Grid item xs={12} md={8} >
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6} >
          <OrdersTableView />
        </Grid>
        <Grid item xs={12} md={6} >
          <ProductsTableView />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard