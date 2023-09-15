package com.nextrend.server.service;

import com.nextrend.server.exception.CartItemException;
import com.nextrend.server.exception.UserException;
import com.nextrend.server.model.Cart;
import com.nextrend.server.model.CartItem;
import com.nextrend.server.model.Product;
import com.nextrend.server.model.User;
import com.nextrend.server.repository.CartItemRepository;
import com.nextrend.server.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImplementation implements CartItemService {

    private final CartItemRepository cartItemRepository;
    private final UserService userService;
    private final CartRepository cartRepository;

    public CartItemServiceImplementation(CartItemRepository cartItemRepository, UserService userService, CartRepository cartRepository) {
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
        this.cartRepository = cartRepository;
    }

    @Override
    public CartItem createCartItem(CartItem cartItem) {

        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()* cartItem.getQuantity());

        CartItem createdCartItem=cartItemRepository.save((cartItem));

        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {

        CartItem item=findCartItemById(id);
        User user=userService.findUserById(item.getUserId());

        if (user.getId().equals(userId)){
            item.setQuantity((item.getQuantity()));
            item.setPrice((item.getQuantity())*item.getProduct().getPrice());
            item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
        }
        return cartItemRepository.save(item);
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {

        CartItem cartItem=cartItemRepository.isCartItemExist(cart, product, size, userId);

        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {

        CartItem cartItem=findCartItemById(cartItemId);
        User user=userService.findUserById(cartItem.getUserId());
        User reqUser=userService.findUserById(userId);

        if (user.getId().equals(reqUser.getId())){
            cartItemRepository.deleteById(cartItemId);
        }
        else{
            throw new UserException("You can't remove another user's item");
        }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {

        Optional<CartItem> optionalCartItem=cartItemRepository.findById(cartItemId);

        if (optionalCartItem.isPresent()){
            return optionalCartItem.get();
        }
        throw new CartItemException("Cart item not found with id: "+cartItemId);
    }
}
