import {Component, OnInit} from '@angular/core';
import {RegionsService} from "../../Services/regions/regions.service";
import {Regions} from "../../Classes/Regions/regions";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {
  // regions: Array<Regions> = [];
  // constructor(
  //
  //   private service: RegionsService,
  // ) {
  // }
  // ngOnInit() {
  //   this.getregions();
  //   console.log(this.regions)
  // }
  // getregions() {
  //   this.service.getregions()
  //     .subscribe({
  //       next: data => {
  //         // @ts-ignore
  //         this.regions = data
  //         console.log(data)
  //       },
  //       error: err => {
  //         console.error(err);
  //       }
  //     });
  // }


}
