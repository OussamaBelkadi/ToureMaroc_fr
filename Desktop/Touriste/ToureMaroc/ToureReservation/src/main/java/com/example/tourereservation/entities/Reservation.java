package com.example.tourereservation.entities;


import jakarta.persistence.*;
import com.example.tourereservation.Model.Region;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor @AllArgsConstructor
public class Reservation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ville;
    @Transient
    private Region region;
    private int regionId;
    private String Nom;
    private String Date;


}
