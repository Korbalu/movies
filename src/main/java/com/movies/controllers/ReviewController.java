package com.movies.controllers;

import com.movies.dto.incoming.ReviewDTO;
import com.movies.dto.outgoing.ReviewListDTO;
import com.movies.services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/reviews/newReview")
    public ResponseEntity<Void> createReview(@RequestBody ReviewDTO reviewDTO) {
        reviewService.createReview(reviewDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/movie/searchReview/{id}")
    public ResponseEntity<List<ReviewListDTO>> reviewLister(@PathVariable Long id){
        return new ResponseEntity<>(reviewService.reviewLister(id), HttpStatus.OK);
    }
}
