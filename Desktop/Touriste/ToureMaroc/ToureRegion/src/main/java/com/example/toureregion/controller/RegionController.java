package com.example.toureregion.controller;

import com.example.toureregion.dtos.RegionDTO;
import com.example.toureregion.entities.Region;
import com.example.toureregion.repositories.RegionRepository;
import com.example.toureregion.service.RegionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class RegionController {
    private RegionRepository regionRepository;
    private final RegionService regionService;

    public RegionController(RegionRepository regionRepository, RegionService regionService) {
        this.regionRepository = regionRepository;
        this.regionService = regionService;
    }

    @GetMapping("regions")
    public List<Region> listRegions(){
        return regionRepository.findAll();
    }
    @GetMapping("/regions/{id}")
    public Region regionById(@PathVariable int id){
        return  regionRepository.findById(id).get();
    }

    @PostMapping("/region/create")
    public Region  createRegion(@RequestBody RegionDTO region){
        return  regionService.createRegion(region);
    }
}
