import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Product from "./components/Product/Product"
import ProductDetails from "./components/ProductDetails/ProductDetails"
// import HomePage from "./pages/HomePage/HomePage"

const App = () => {
  return (
    <div>
      <Navigation/>
      
      <Product/>
      <ProductDetails/>
      <Footer/>
    </div>
  )
}

export default App