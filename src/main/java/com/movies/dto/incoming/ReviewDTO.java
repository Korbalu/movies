package com.movies.dto.incoming;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReviewDTO {
    private String usersMail;
    private String reviewText;
    private Long movieId;
}
