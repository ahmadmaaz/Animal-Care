package com.example.petadoptionbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.processing.Generated;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AdoptionStory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(nullable = false)
    String url;

    @Column(nullable = false)
    String caption;

    @Column(nullable = false)
    String title;
}
