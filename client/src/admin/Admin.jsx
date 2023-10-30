import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemIcon, CssBaseline, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DevicesIcon from '@mui/icons-material/Devices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from "./components/dashboard";
import CreateProductForm from "./components/createProductForm";
import ProductsTable from "./components/productsTable";
import OrdersTable from "./components/ordersTable";
import CustomersTable from "./components/customersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DevicesIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <AccountBoxIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ListAltIcon /> },
  { name: "Add Product", path: "/admin/product/create", icon: <PostAddIcon /> }
]

const Admin = () => {

  // const theme = useTheme();
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  // const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon className="-mr-5">
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>


      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )


  return (
    <div>
      <div className="flex h-screen">
        <CssBaseline />
        <div className="pl-2 w-[15%] border border-r-gray-300 fixed top-0 h-full">
          {drawer}
        </div>
        <div className="w-[85%] h-full ml-[15%]">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm />}></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default Admin