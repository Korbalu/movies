package com.movies.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String usersMail;
    private String reviewText;
    private LocalDateTime createdAt;
    private Long movieId;

    public Review(String usersMail, String reviewText, Long movieId) {
        this.usersMail = usersMail;
        this.reviewText = reviewText;
        this.createdAt = LocalDateTime.now();
        this.movieId = movieId;
    }
}
