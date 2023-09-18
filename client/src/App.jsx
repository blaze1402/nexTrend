import Navigation from "./components/Navigation/Navigation"
import HomePage from "./pages/HomePage/HomePage"
import Checkout from "./components/Checkout/Checkout"
import { Route,Routes } from "react-router-dom"
import DeliveryAddressForm from "./components/Checkout/DeliveryAddressForm"
const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/checkout"element={ <Checkout />}></Route>
      </Routes>
    </>
  )
}

export default App