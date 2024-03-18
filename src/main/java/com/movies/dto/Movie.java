package com.movies.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    private Integer id;
    private String title;
    @JsonProperty("poster_path")
    private String pic;
    private String overview;
    @JsonProperty("release_date")
    private String releaseYear;
    @JsonProperty("original_language")
    private String language;
}
