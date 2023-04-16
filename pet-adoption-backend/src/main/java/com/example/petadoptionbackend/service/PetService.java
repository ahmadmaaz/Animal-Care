package com.example.petadoptionbackend.service;

import com.example.petadoptionbackend.model.Pet;
import com.example.petadoptionbackend.repo.PetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PetService {
    @Autowired
    PetRepo petRepo;

    public List<Pet> getAllPet(){
        return petRepo.findAll();
    }
    public void createPet(Pet pet){
        petRepo.save(pet);
        System.out.println(pet);
    }
    public List<Pet> getFeaturedPets(){
        return petRepo.findFeatured();
    }
}
