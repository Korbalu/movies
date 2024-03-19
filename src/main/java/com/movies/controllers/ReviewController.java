package com.movies.controllers;

import com.movies.dto.incoming.ReviewDTO;
import com.movies.services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/newReview")
    public ResponseEntity<Void> createReview(@RequestBody ReviewDTO reviewDTO) {
        System.out.println(reviewDTO + " from Contr");
        reviewService.createReview(reviewDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
