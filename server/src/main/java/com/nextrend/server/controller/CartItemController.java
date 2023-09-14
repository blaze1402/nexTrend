package com.nextrend.server.controller;

import com.nextrend.server.exception.CartItemException;
import com.nextrend.server.exception.UserException;
import com.nextrend.server.model.CartItem;
import com.nextrend.server.model.User;
import com.nextrend.server.repository.CartItemRepository;
import com.nextrend.server.response.ApiResponse;
import com.nextrend.server.service.CartItemService;
import com.nextrend.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private UserService userService;

    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId, @RequestHeader("Authorization") String jwt) throws UserException, CartItemException {

        User user = userService.findUserProfileByJwt(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);

        ApiResponse res = new ApiResponse();
        res.setMessage("Item removed from the cart");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartItem, @PathVariable Long cartItemId, @RequestHeader("Authorization") String jwt) throws UserException, CartItemException {

        User user = userService.findUserProfileByJwt(jwt);
        CartItem updatedCartItem = cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);

        return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
    }
}
