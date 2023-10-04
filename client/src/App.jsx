import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Product from "./components/Product/Product"
import ProductDetails from "./components/ProductDetails/ProductDetails"
// import HomePage from "./pages/HomePage/HomePage"
import HomePage from "./pages/HomePage/HomePage"
import Cart from "./components/Cart/Cart"

const App = () => {
  return (
    <div>
      <Navigation/>
      
      <Product/>
      <ProductDetails/>
      <Footer/>
      <HomePage/>
      <Cart/>
    </div>
  )
}
export default App 
// export default Appclear