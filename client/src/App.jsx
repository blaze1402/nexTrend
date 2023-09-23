import Navigation from "./components/Navigation/Navigation"
import Order from "./components/Order/Order"
import HomePage from "./pages/HomePage/HomePage"

const App = () => {
  return (
    <div>
      <Navigation/>
      <HomePage/>
      <Order/>
    </div>
  )
}

export default App