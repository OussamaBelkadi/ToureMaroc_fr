package com.example.tourereservation.controller;

import com.example.tourereservation.Model.Region;
import com.example.tourereservation.entities.Reservation;
import com.example.tourereservation.places.RegionRestClient;
import com.example.tourereservation.repositories.ReservationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class RegionController {
    private ReservationRepository reservationRepository;
    private RegionRestClient regionRestClient;

    public RegionController(ReservationRepository reservationRepository , RegionRestClient regionRestClient) {
        this.reservationRepository = reservationRepository;
        this.regionRestClient = regionRestClient;
    }


    @GetMapping("/reserve")
    public List<Reservation> listReservation(){

      List<Reservation> reservations = reservationRepository.findAll();
        reservations.forEach(reservation -> {
          reservation.setRegion(regionRestClient.findRegionById(reservation.getRegionId()));
      });
        return reservations;

    }
    @GetMapping("/reserve/{id}")
    public Reservation reservationById(@PathVariable int id){
        Reservation reservation =  reservationRepository.findById(id).get();
        Region region = regionRestClient.findRegionById(reservation.getRegionId());
        reservation.setRegion(region);
        return  reservation;
    }


}
