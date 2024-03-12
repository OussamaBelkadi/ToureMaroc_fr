package com.example.tourereservation.places;

import com.example.tourereservation.Model.Region;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "REGION-SERVICE")
public interface RegionRestClient {
    @GetMapping("/regions/{id}")
    Region findRegionById(@PathVariable int id);
    @GetMapping("/regions")
    List<Region> allRegions();
}
