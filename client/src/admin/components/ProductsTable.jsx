import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { deleteProduct, findAllProducts } from '../../state/Product/Action'

const ProductsTable = () => {
  const dispatch = useDispatch()
  const { product } = useSelector(store => store)

  useEffect(() => {
    dispatch(findAllProducts())
    console.log(product)
  }, [product.deletedProduct, product.products.length])

  const handleProductDelete = (productId) => () => {
    dispatch(deleteProduct(productId))
  }

  return (
    <div>
      <Card className='p-5' sx={{ backgroundColor: "#0d0d22", color: "white" }}>
        <CardHeader title='All Products' />
        <TableContainer className='border'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align='left'>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align='left'>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Delete Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.products?.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell sx={{ color: 'white' }} align="center"><Avatar src={item.imageUrl} /></TableCell>
                  <TableCell sx={{ color: 'white' }} component="th" scope="row">{item.title}</TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">{item.category.name.split('_').map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')}</TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">{item.discountedPrice}</TableCell>
                  <TableCell sx={{ color: 'white' }} align="center">{item.quantity}</TableCell>
                  <TableCell sx={{ color: 'white' }} align="center"><Button onClick={handleProductDelete(item.id)} variant='contained'>Delete ❌</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default ProductsTable