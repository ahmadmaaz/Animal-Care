package com.example.petadoptionbackend.controller;

import com.example.petadoptionbackend.model.AdoptionStory;
import com.example.petadoptionbackend.payload.Response;
import com.example.petadoptionbackend.service.AdoptionStoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/adoptionStory")
public class AdoptionStoryController {

    @Autowired
    AdoptionStoryService adoptionStoryService;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ResponseEntity<Response> getAllStories(){
        Response response;
        try{
            response= new Response(200,"",adoptionStoryService.getAllStories());
        }catch (Exception e) {
            response = new Response<>(500, "ERROR_OCCURED", null);
        }

        return ResponseEntity.ok().body(response);
    }


    @RequestMapping(value = "/",method = RequestMethod.POST)
    public ResponseEntity<Response> createStory(@RequestBody AdoptionStory adoptionStory){
        Response response;
        try{
            adoptionStoryService.addStory(adoptionStory);
            response= new Response(200,"ADOPTIONSTORY_SUCCESSFULLY_CREATED",null);
        }catch (Exception e) {
            response = new Response<>(500, "ERROR_OCCURED", null);
        }
        return ResponseEntity.ok().body(response);
    }
}
