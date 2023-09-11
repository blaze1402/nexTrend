package com.nextrend.server.controller;

import com.nextrend.server.exception.ProductException;
import com.nextrend.server.exception.UserException;
import com.nextrend.server.model.Rating;
import com.nextrend.server.model.Review;
import com.nextrend.server.model.User;
import com.nextrend.server.request.ReviewRequest;
import com.nextrend.server.service.ReviewService;
import com.nextrend.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException{

        User user=userService.findUserProfileByJwt(jwt);
        Review review=reviewService.createReview(req, user);
        return new ResponseEntity<>(review, HttpStatus.CREATED);

    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getAllProductReviews(@PathVariable("productId") Long productId, @RequestHeader("Authorization") String jwt) throws UserException, ProductException{

        List<Review> reviews=reviewService.getProductReviews(productId);
        return new ResponseEntity<>(reviews, HttpStatus.ACCEPTED);

    }

}
