import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Product from "./components/Product/Product"
import HomePage from "./pages/HomePage/HomePage"

const App = () => {
  return (
    <div>
      <Navigation/>
      <HomePage/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App