import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, AvatarGroup, Button, Card, CardHeader, Fade, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { cancelledOrder, confirmedOrder, deleteOrder, deliveredOrder, getOrders, shippedOrder } from "../../State/Admin/Order/Action"

const OrdersTable = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState([]);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl]
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl]
    newAnchorElArray[index] = null
    setAnchorEl(newAnchorElArray);
  };

  const { adminOrder } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.placed, adminOrder.shipped, adminOrder.delivered, adminOrder.cancelled, adminOrder.deletedOrder])

  const handleOrderDelete = (orderId) => () => {
    dispatch(deleteOrder(orderId))
  }

  // const handlePlacedOrder = (orderId) => () => {
  //   dispatch(placedOrder(orderId))
  //   handleClose()
  // }

  const handleConfirmedOrder = (orderId) => () => {
    dispatch(confirmedOrder(orderId))
    handleClose()
  }

  const handleShippedOrder = (orderId) => () => {
    dispatch(shippedOrder(orderId))
    handleClose()
  }

  const handleDeliveredOrder = (orderId) => () => {
    dispatch(deliveredOrder(orderId))
    handleClose()
  }

  const handleCancelledOrder = (orderId) => () => {
    dispatch(cancelledOrder(orderId))
    handleClose()
  }

  return (
    <div>
      <Card className='p-5' sx={{ backgroundColor: "#0d0d22", color: "white" }}>
        <CardHeader title='All Orders' />
        <TableContainer className='border'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align='left'>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align='left'>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Order Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Update Order Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Delete Order</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <AvatarGroup sx={{ justifyContent: 'start' }}>
                      {item.orderItems.map((orderItem) => <Avatar key={orderItem.id} src={orderItem.product.imageUrl} />)}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }} component="th" scope="row">
                    {item.orderItems.map((orderItem) => <p key={orderItem.id}>{orderItem.product.title}</p>)}
                  </TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">{item.id}</TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">{item.totalDiscountedPrice}</TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">
                    <span className={`text-white px-5 py-2 rounded-full
                    ${item.orderStatus === 'PENDING' ? 'bg-gray-500' : ''}
                    ${item.orderStatus === 'PLACED' ? 'bg-amber-900' : ''}
                    ${item.orderStatus === 'CONFIRMED' ? 'bg-yellow-500' : ''}
                    ${item.orderStatus === 'SHIPPED' ? 'bg-green-500' : ''}
                    ${item.orderStatus === 'DELIVERED' ? 'bg-blue-500' : ''}
                    ${item.orderStatus === 'CANCELLED' ? 'bg-red-500' : ''}
                    `}>{item.orderStatus}</span>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">
                    <Button
                      id="fade-button"
                      aria-controls={`fade-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                    >
                      Update Status
                    </Button>
                    <Menu
                      id={`fade-menu-${item.id}`}
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      TransitionComponent={Fade}
                    >
                      {/* <MenuItem onClick={handlePlacedOrder(item.id)}>Order Placed</MenuItem> */}
                      <MenuItem onClick={handleConfirmedOrder(item.id)}>Order Confirmed</MenuItem>
                      <MenuItem onClick={handleShippedOrder(item.id)}>Order Shipped</MenuItem>
                      <MenuItem onClick={handleDeliveredOrder(item.id)}>Order Delivered</MenuItem>
                      <MenuItem onClick={handleCancelledOrder(item.id)}>Order Cancelled</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">
                    <Button onClick={handleOrderDelete(item.id)} variant='contained'>Delete ❌</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable
