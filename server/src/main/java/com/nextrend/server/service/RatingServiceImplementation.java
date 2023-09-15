package com.nextrend.server.service;

import com.nextrend.server.exception.ProductException;
import com.nextrend.server.model.Product;
import com.nextrend.server.model.Rating;
import com.nextrend.server.model.User;
import com.nextrend.server.repository.RatingRepository;
import com.nextrend.server.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImplementation implements RatingService{

    private final RatingRepository ratingRepository;
    private final ProductService productService;

    public RatingServiceImplementation(RatingRepository ratingRepository, ProductService productService) {
        this.ratingRepository = ratingRepository;
        this.productService = productService;
    }

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {

        Product product=productService.findProductById(req.getProductId());

        Rating rating=new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setCreatedAt(LocalDateTime.now());

        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProductRatings(Long productId) {
        return ratingRepository.getAllProductRatings(productId);
    }
}
