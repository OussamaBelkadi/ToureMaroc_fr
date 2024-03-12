import { Component, OnInit } from '@angular/core';
import { RegionsService } from "../../Services/regions/regions.service";
import { Regions } from "../../Classes/Regions/regions";
import {HttpResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: Regions[] = [];
  showForm = false;

  regionForm: FormGroup = this.fb.group({
    ville: ['', Validators.required],
    typeRegion: ['', Validators.required],
    trajet: ['', Validators.required],
  });



  constructor(private service: RegionsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getRegions();

    this.regionForm = this.fb.group({
      ville: ['', Validators.required],
      typeRegion: ['', Validators.required],
      trajet: ['', Validators.required],
    });
  }

  addCompetition() {
    this.showForm = true;
  }

  onSubmit() {
    const newRegion = this.regionForm.value;
    console.log('Form:', newRegion);

    this.service.createRegion(newRegion).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Response:', response);
        this.getRegions();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.regionForm.reset();
    this.showForm = false;
  }

  getRegions() {
    this.service.getregions().subscribe(
      (data: Regions[]) => {
        this.regions = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // protected readonly addAsyncMatchers = addAsyncMatchers;
}
