package com.example.petadoptionbackend.repo;

import com.example.petadoptionbackend.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PetRepo extends JpaRepository<Pet, Integer> {

    @Query(value = "SELECT * from pet where is_featured=true",nativeQuery = true)
    List<Pet> findFeatured();
}
