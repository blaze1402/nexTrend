import Navigation from "./components/Navigation/Navigation"
import HomePage from "./pages/HomePage/HomePage"
import Checkout from "./components/Checkout/Checkout"
import { Route,Routes } from "react-router-dom"
import DeliveryAddressForm from "./components/Checkout/DeliveryAddressForm"
import Order from "./components/Order/Order"
import OrderDetails from "./components/Order/OrderDetails"
import CustomerRouters from "./Routers/CustomerRouters"
const App = () => {
  return (
    <div className="">
  
<Routes>
  <Route path="/*" element={<CustomerRouters/>}></Route>
</Routes>






    </div>
  )
}

export default App