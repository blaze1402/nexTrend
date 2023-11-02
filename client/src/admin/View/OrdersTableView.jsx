import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, AvatarGroup, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { getOrders } from "../../State/Admin/Order/Action"

const OrdersTableView = () => {
    const dispatch = useDispatch()

    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed, adminOrder.placed, adminOrder.shipped, adminOrder.delivered, adminOrder.cancelled, adminOrder.deletedOrder])

    return (
        <div>
            <Card className='p-5' sx={{ backgroundColor: "#0d0d22", color: "white" }}>
                <CardHeader title='Recent Orders' />
                <TableContainer className='border'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align='left'>Image</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align='left'>Title</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Order Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.slice(0, 5).map((item) => (
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
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrdersTableView
