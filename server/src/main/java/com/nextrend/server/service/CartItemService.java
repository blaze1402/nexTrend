package com.nextrend.server.service;

import com.nextrend.server.exception.CartItemException;
import com.nextrend.server.exception.UserException;
import com.nextrend.server.model.Cart;
import com.nextrend.server.model.CartItem;
import com.nextrend.server.model.Product;

public interface CartItemService {

    CartItem createCartItem(CartItem cartItem);

    CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;

    CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);

    void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;

    CartItem findCartItemById(Long cartItemId) throws CartItemException;

}
