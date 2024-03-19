package com.movies.services;

import com.movies.dto.outgoing.Movie;
import com.movies.dto.outgoing.MovieDetails;
import com.movies.dto.outgoing.MovieDetailsDTO;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService {

    private static final String TMDB_API_URL = "https://api.themoviedb.org/3";
    private static final String API_KEY = "84b2674dcba2f54328f0fef9d7abfe44";
    private static final String ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" +
            ".eyJhdWQiOiI4NGIyNjc0ZGNiYTJmNTQzMjhmMGZlZjlkN2FiZmU0NCIsInN1YiI6IjVjOGEzYzhlMGUwYTI2MGI2MGMzNjIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ" +
            ".VV1-jBuJFSiIH1-sjdC0RgcDRbiGCZm6pbN6KBeeVlU";


    private final WebClient webClient;

    public MovieService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(TMDB_API_URL).build();
    }

    public Mono<MovieDetails> searchMovieByTitle(String title) {
        return webClient.get()
                .uri("/search/movie?api_key={API_KEY}&query={title}", API_KEY, title)
                .retrieve()
                .bodyToMono(MovieDetailsDTO.class)
                .flatMap(movieDetailsDTO -> {
                    if (movieDetailsDTO != null && movieDetailsDTO.getResults() != null && !movieDetailsDTO.getResults().isEmpty()) {
                        return Mono.just(movieDetailsDTO.getResults().get(0));
                    } else {
                        return Mono.empty();
                    }
                });
    }

    public List<Movie> processResponse(String type) throws IOException {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(TMDB_API_URL + "/movie/" + type + "?language=en-US&page=1")
                .get()
                .addHeader("accept", "application/json")
                .addHeader("Authorization", "Bearer " + ACCESS_TOKEN)
                .build();
        Response response = client.newCall(request).execute();

        List<Movie> movies = new ArrayList<>();

        String responseBody = response.body().string();
        JSONObject responseJson = new JSONObject(responseBody);

        JSONArray resultsArray = responseJson.getJSONArray("results");

        for (int i = 0; i < resultsArray.length(); i++) {
            JSONObject movieJson = resultsArray.getJSONObject(i);
            Movie movie = new Movie();
            movie.setId(movieJson.getInt("id"));
            movie.setTitle(movieJson.getString("title"));
            movie.setOverview(movieJson.getString("overview"));

            String baseUrl = "https://image.tmdb.org/t/p/";
            String imageSize = "w185";
            String imagePath = movieJson.getString("poster_path");
            String imageUrl = baseUrl + imageSize + imagePath;
            movie.setPic(imageUrl);

            movie.setLanguage(movieJson.getString("original_language"));
            movie.setReleaseYear(movieJson.getString("release_date"));
            movies.add(movie);
        }
        return movies;
    }

    public Mono<MovieDetails> searchMovieById(Integer id) {
        return webClient.get()
                .uri("/movie/{id}?api_key={API_KEY}&language=en-US", id, API_KEY)
                .retrieve()
                .bodyToMono(MovieDetails.class)
                .flatMap(movieDetails -> {
                    String baseUrl = "https://image.tmdb.org/t/p/";
                    String imageSize = "w342";
                    String imagePath = movieDetails.getPosterPath();
                    String imageUrl = baseUrl + imageSize + imagePath;
                    movieDetails.setPosterPath(imageUrl);
                    return Mono.just(movieDetails);
                });
    }

}

