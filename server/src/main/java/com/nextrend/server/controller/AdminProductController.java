package com.nextrend.server.controller;

import com.nextrend.server.exception.ProductException;
import com.nextrend.server.model.Product;
import com.nextrend.server.request.CreateProductRequest;
import com.nextrend.server.response.ApiResponse;
import com.nextrend.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req) {

        Product product = productService.createProduct(req);
        return new ResponseEntity<>(product, HttpStatus.CREATED);

    }

    @DeleteMapping("/{productId}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductException {

        productService.deleteProduct(productId);

        ApiResponse res = new ApiResponse();
        res.setMessage("Product deleted successfully");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.CREATED);

    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> findAllProducts(){

//        List<Product> products=productService.findAllProducts();
//        return new ResponseEntity<>(products, HttpStatus.OK);
        // TODO: findAllproducts()
        return null;
    }

    @PutMapping("/{productId}/update")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productId, @RequestBody Product req) throws ProductException {

        Product product = productService.updateProduct(productId, req);
        return new ResponseEntity<>(product, HttpStatus.CREATED);

    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest[] req){

        for (CreateProductRequest product:req){
            productService.createProduct(product);
        }
        ApiResponse res = new ApiResponse();
        res.setMessage("Product created successfully");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.CREATED);

    }

}
