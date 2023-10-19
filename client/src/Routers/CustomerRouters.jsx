import { Route, Routes } from "react-router-dom"

import HomePage from '../pages/HomePage/HomePage'
import Navigation from '../components/Navigation/Navigation'
import Checkout from '../components/Checkout/Checkout'
import Order from '../components/Order/Order'
import OrderDetails from '../components/Order/OrderDetails'
import Cart from '../components/Cart/Cart'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Product from "../components/Product/Product"

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path='/login' element={<HomePage />}></Route>
        <Route path='/register' element={<HomePage />}></Route>

        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
      </Routes>
    </div>
  )
}

export default CustomerRouters