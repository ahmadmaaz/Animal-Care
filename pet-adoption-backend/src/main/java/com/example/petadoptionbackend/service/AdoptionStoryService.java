package com.example.petadoptionbackend.service;

import com.example.petadoptionbackend.model.AdoptionStory;
import com.example.petadoptionbackend.repo.AdoptionStoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionStoryService {

    @Autowired
    AdoptionStoryRepo adoptionStoryRepo;

    public List<AdoptionStory> getAllStories(){
        return adoptionStoryRepo.findAll();
    }

    public void addStory(AdoptionStory adoptionStory){
        adoptionStoryRepo.save(adoptionStory);
    }

}
