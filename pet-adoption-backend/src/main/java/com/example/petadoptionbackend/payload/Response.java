package com.example.petadoptionbackend.payload;


import lombok.*;


import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Response<T> {

    private int code;
    private String message ;
    private List<T> data;
}
