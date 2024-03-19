package com.movies.services;

import com.movies.domain.Review;
import com.movies.dto.incoming.ReviewDTO;
import com.movies.repositories.ReviewRepository;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public void createReview(ReviewDTO reviewDTO) {
        System.out.println(reviewDTO + " from Serv");
        Review review = new Review(reviewDTO.getUsersMail(), reviewDTO.getReviewText(), reviewDTO.getMovieId());
        System.out.println(review);
        reviewRepository.save(review);
    }
}
