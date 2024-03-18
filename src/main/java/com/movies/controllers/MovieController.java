package com.movies.controllers;

import com.movies.dto.Movie;
import com.movies.services.MovieService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/movie")
public class MovieController {

    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/topRated")
    public List<Movie> searchMoviesTopRated() throws IOException {
        return movieService.processResponse("top_rated");
    }

    @GetMapping("/popular")
    public List<Movie> searchMoviesPopular() throws IOException {
        return movieService.processResponse("popular");
    }

    @GetMapping("/search/{title}")
    public Mono<Movie> searchMovieByTitle(@PathVariable String title) {
        return movieService.searchMovieByTitle(title);
    }
}
