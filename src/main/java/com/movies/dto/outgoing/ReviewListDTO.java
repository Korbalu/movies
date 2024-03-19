package com.movies.dto.outgoing;

import com.movies.domain.Review;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class ReviewListDTO {
    private String authorMail;
    private String reviewText;
    private LocalDateTime createdAt;

    public ReviewListDTO(Review review) {
        this.authorMail = review.getUsersMail();
        this.reviewText = review.getReviewText();
        this.createdAt = review.getCreatedAt();
    }
}
