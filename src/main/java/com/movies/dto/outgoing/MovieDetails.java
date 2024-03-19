package com.movies.dto.outgoing;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieDetails {
    private Integer id;
    private String title;
    @JsonProperty("poster_path")
    private String posterPath;
    private String overview;
    @JsonProperty("release_date")
    private String releaseDate;
    @JsonProperty("original_language")
    private String originalLanguage;
    private Double popularity;
    @JsonProperty("vote_average")
    private Double voteAverage;
}
