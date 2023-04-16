package com.example.petadoptionbackend.controller;

import com.example.petadoptionbackend.model.Pet;
import com.example.petadoptionbackend.payload.Response;
import com.example.petadoptionbackend.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/pet")
public class PetController {
    @Autowired
    PetService petService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Response> createPet(@RequestBody Pet pet){
        Response response;
        try{
            petService.createPet(pet);
            response= new Response<>(200,"PET_SUCCESSFULLY_CREATED",null);
        }catch (Exception e) {
            response = new Response<>(500, "ERROR_OCCURED", null);
        }
            return ResponseEntity.ok().body(response);

    }
    @RequestMapping(value = "/featured/",method = RequestMethod.GET)
    public ResponseEntity<Response> getFeaturedPets(){
        Response response;
        try{
            response= new Response<>(200,"PETS_RETRIEVED",petService.getFeaturedPets());
        }catch (Exception e) {
            response = new Response<>(500, "ERROR_OCCURED", null);
        }
        return ResponseEntity.ok().body(response);

    }
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<Response> getAllPet(){
        Response response;
        try{
            response= new Response<>(200,"PETS_RETRIEVED",petService.getAllPet());
        }catch (Exception e) {
            response = new Response<>(500, "ERROR_OCCURED", null);
        }
        return ResponseEntity.ok().body(response);

    }



}
