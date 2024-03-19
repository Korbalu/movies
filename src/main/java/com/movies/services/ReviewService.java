package com.movies.services;

import com.movies.domain.Review;
import com.movies.dto.incoming.ReviewDTO;
import com.movies.dto.outgoing.ReviewListDTO;
import com.movies.repositories.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public void createReview(ReviewDTO reviewDTO) {
        Review review = new Review(reviewDTO.getUsersMail(), reviewDTO.getReviewText(), reviewDTO.getMovieId());
        reviewRepository.save(review);
    }

    public List<ReviewListDTO> reviewLister(Long movieId){
        return reviewRepository.findByMovieId(movieId).stream().map(ReviewListDTO::new).toList();
    }
}
