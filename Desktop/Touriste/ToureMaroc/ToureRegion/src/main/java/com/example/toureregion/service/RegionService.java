package com.example.toureregion.service;

import com.example.toureregion.dtos.RegionDTO;
import com.example.toureregion.entities.Region;
import com.example.toureregion.repositories.RegionRepository;
import org.springframework.stereotype.Service;

@Service
public class RegionService {
    private final RegionRepository regionRepositor;

    public RegionService(RegionRepository regionRepositor) {
        this.regionRepositor = regionRepositor;
    }
    public Region createRegion(RegionDTO regionDTO){
        Region region = Region.builder()
                .trajet(regionDTO.getTrajet())
                .ville(regionDTO.getVille())
                .type(regionDTO.getType()).build();
        return regionRepositor.save(region);
    }

}

