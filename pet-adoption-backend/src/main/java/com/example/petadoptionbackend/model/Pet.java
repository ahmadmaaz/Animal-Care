package com.example.petadoptionbackend.model;

import jakarta.persistence.*;
import lombok.*;
import org.jetbrains.annotations.NotNull;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String species;

    @Column(nullable = false)
    private String age;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private Boolean isFeatured;


}
