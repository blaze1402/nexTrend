package com.nextrend.server.service;

import com.nextrend.server.exception.ProductException;
import com.nextrend.server.model.Rating;
import com.nextrend.server.model.User;
import com.nextrend.server.request.RatingRequest;

import java.util.List;

public interface RatingService {

    Rating createRating(RatingRequest req, User user) throws ProductException;

    List<Rating> getProductRatings(Long productId);

}
