package com.nextrend.server.service;

import com.nextrend.server.exception.OrderException;
import com.nextrend.server.model.Address;
import com.nextrend.server.model.Order;
import com.nextrend.server.model.User;

import java.util.List;

public interface OrderService {

    public Order createOrder(User user, Address shippingAddress);

    public Order findOrderById(Long orderId) throws OrderException;

    public List<Order> usersOrderHistory (Long userId);

    public Order placedOrder(Long orderId) throws OrderException;

    public Order confirmedOrder(Long orderId) throws OrderException;

    public Order shippedOrder(Long orderId) throws OrderException;

    public Order deliveredOrder(Long orderId) throws OrderException;

    public Order canceledOrder(Long orderId) throws OrderException;

    public List<Order> getAllOrders();

    public void deleteOrder(Long orderId) throws OrderException;

}
