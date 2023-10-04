import { Routes, Route } from "react-router-dom"
import CustomerRouters from "./Routers/CustomerRouters"
import AdminRouters from "./Routers/AdminRouters"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/admin/*" element={<AdminRouters />} />
      </Routes>
    </div>
  )
}
export default App