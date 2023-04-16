package com.example.petadoptionbackend.repo;

import com.example.petadoptionbackend.model.AdoptionStory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdoptionStoryRepo extends JpaRepository<AdoptionStory, Integer> {
}
