package com.nextrend.server.service;

import com.nextrend.server.exception.OrderException;
import com.nextrend.server.model.*;
import com.nextrend.server.repository.AddressRepository;
import com.nextrend.server.repository.OrderItemRepository;
import com.nextrend.server.repository.OrderRepository;
import com.nextrend.server.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImplementation implements OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;
    private final OrderItemService orderItemService;
    private final OrderItemRepository orderItemRepository;
    private final CartService cartService;

    public OrderServiceImplementation(OrderRepository orderRepository, AddressRepository addressRepository, UserRepository userRepository, OrderItemService orderItemService, OrderItemRepository orderItemRepository, CartService cartService) {
        this.orderRepository = orderRepository;
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
        this.orderItemService = orderItemService;
        this.orderItemRepository = orderItemRepository;
        this.cartService = cartService;
    }

    @Override
    public Order createOrder(User user, Address shippingAddress) {

        Address existingAddress = addressRepository.findByAddressId(shippingAddress.getId());

        if (existingAddress != null) {
            // Address exists, use the existing one
            shippingAddress = existingAddress;
        } else {
            // Address doesn't exist, save it
            shippingAddress.setUser(user);
            shippingAddress = addressRepository.save(shippingAddress);
            user.getAddress().add(shippingAddress);
            userRepository.save(user);
        }

//        shippingAddress.setUser(user);
//        Address address = addressRepository.save(shippingAddress);
//        user.getAddress().add(address);
//        userRepository.save(user);

        Cart cart = cartService.findUserCart(user.getId());
        List<OrderItem> orderItems = new ArrayList<>();

        for (CartItem item : cart.getCartItems()) {
            OrderItem orderItem = new OrderItem();

            orderItem.setPrice(item.getPrice());
            orderItem.setProduct(item.getProduct());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setSize(item.getSize());
            orderItem.setUserId(item.getUserId());
            orderItem.setDiscountedPrice(item.getDiscountedPrice());

            OrderItem createdOrderItem = orderItemRepository.save(orderItem);

            orderItems.add(createdOrderItem);
        }

        Order createdOrder = new Order();
        createdOrder.setUser(user);
        createdOrder.setOrderItems(orderItems);
        createdOrder.setTotalPrice(cart.getTotalPrice());
        createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
        createdOrder.setDiscount(cart.getDiscount());
        createdOrder.setTotalItem(cart.getTotalItem());

        createdOrder.setShippingAddress(shippingAddress);
        createdOrder.setOrderDate(LocalDateTime.now());
        createdOrder.setOrderStatus("PENDING");
        createdOrder.getPaymentDetails().setPaymentStatus("PENDING");
        createdOrder.setCreatedAt(LocalDateTime.now());

        Order savedOrder = orderRepository.save(createdOrder);

        for (OrderItem item : orderItems) {
            item.setOrder(savedOrder);
            orderItemRepository.save(item);
        }

        return savedOrder;
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {

        Optional<Order> optionalOrder = orderRepository.findById(orderId);

        if (optionalOrder.isPresent()) {
            return optionalOrder.get();
        }
        throw new OrderException("Order does not exist with id: " + orderId);
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {

        List<Order> orders = orderRepository.getUserOrders(userId);
        return orders;
    }

    @Override
    public Order placedOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        order.setOrderStatus("PLACED");
        order.getPaymentDetails().setPaymentStatus("COMPLETED");

        return order;
    }

    @Override
    public Order confirmedOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        order.setOrderStatus("CONFIRMED");
        return orderRepository.save(order);
    }

    @Override
    public Order shippedOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        order.setOrderStatus("SHIPPED");
        return orderRepository.save(order);
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        order.setOrderStatus("DELIVERED");
        return orderRepository.save(order);
    }

    @Override
    public Order canceledOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        order.setOrderStatus("CANCELLED");
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {

        return orderRepository.findAll();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);

    }
}
