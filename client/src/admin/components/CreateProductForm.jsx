import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

import { createProduct } from '../../state/Product/Action';

const initialSizes = [
  { name: 'S', quantity: 0 },
  { name: 'M', quantity: 0 },
  { name: 'L', quantity: 0 }
];

const CreateProductForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target
    name === "size_quantity" ? name = "quantity" : name = e.target.name

    const sizes = [...productData.size]
    sizes[index][name] = value
    setProductData((prevState) => ({
      ...prevState,
      size: sizes
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createProduct(productData))
    navigate('/admin/products')
  }

  return (
    <div className="p-10">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="pb-10">
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit} className="min-h-screen">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="imageUrl"
              label="Image URL"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="brand"
              label="Brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="title"
              label="Title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="color"
              label="Color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="quantity"
              label="Quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="price"
              label="Price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="discountedPrice"
              label="Discounted Price"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="discountPercent"
              label="Discount Percent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="mens_tshirt">Mens Tshirt</MenuItem>
                <MenuItem value="mens_jacket">Mens Jacket</MenuItem>
                <MenuItem value="mens_bottoms">Mens Bottoms</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="description"
              label="Description"
              value={productData.description}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="name"
                  label="Size Name"
                  value={size.name}
                  onChange={(e) => handleSizeChange(e, index)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="size_quantity"
                  label="Quantity"
                  value={size.quantity}
                  onChange={(e) => handleSizeChange(e, index)}
                  type="number"
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12} className="flex justify-center">
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{ p: 1.8 }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CreateProductForm