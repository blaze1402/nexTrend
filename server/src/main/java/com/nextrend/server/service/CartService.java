package com.nextrend.server.service;

import com.nextrend.server.exception.ProductException;
import com.nextrend.server.model.Cart;
import com.nextrend.server.model.User;
import com.nextrend.server.request.AddItemRequest;

public interface CartService {

    Cart createCart(User user);

    String addCartItem(Long userId, AddItemRequest req) throws ProductException;

    Cart findUserCart(Long userId);

}
