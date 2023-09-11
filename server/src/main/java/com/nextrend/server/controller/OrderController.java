package com.nextrend.server.controller;

import com.nextrend.server.exception.OrderException;
import com.nextrend.server.exception.UserException;
import com.nextrend.server.model.Address;
import com.nextrend.server.model.Order;
import com.nextrend.server.model.User;
import com.nextrend.server.service.OrderService;
import com.nextrend.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    public OrderService orderService;

    @Autowired
    public UserService userService;

    @PostMapping("/")
    public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress, @RequestHeader("Authorization") String jwt) throws UserException {

        User user=userService.findUserProfileByJwt(jwt);
        Order order=orderService.createOrder(user, shippingAddress);
        return new ResponseEntity<>(order, HttpStatus.CREATED);

    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> userOrderHistory(@RequestHeader("Authorization") String jwt) throws UserException{

        User user=userService.findUserProfileByJwt(jwt);
        List<Order> orders= orderService.usersOrderHistory(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);

    }

    @GetMapping("/{Id}")
    public ResponseEntity<Order> findOrderById(@PathVariable("Id") Long orderId, @RequestHeader("Authorization") String jwt) throws UserException, OrderException {

        User user=userService.findUserProfileByJwt(jwt);
        Order order=orderService.findOrderById(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

}
