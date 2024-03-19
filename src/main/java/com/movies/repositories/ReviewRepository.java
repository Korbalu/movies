package com.movies.repositories;

import com.movies.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("select r from Review r where r.movieId=:id order by r.createdAt desc")
    List<Review> findByMovieId(@Param("id") Long id);
}
