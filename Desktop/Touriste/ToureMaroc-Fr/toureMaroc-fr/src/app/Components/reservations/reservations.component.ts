import { Component } from '@angular/core';
import {ReservationsService} from "../../Services/reservations/reservations.service";
import {Reservations} from '../../Classes/Reservations/reservations';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  // reservations: Array<Reservations> = [];
  //
  // constructor(
  //
  //   private service: ReservationsService,
  // ) {
  // }
  // ngOnInit() {
  //
  //   this.getreservations();
  //   console.log(this.reservations)
  // }
  //
  // getreservations() {
  //   this.service.getreservations()
  //     .subscribe({
  //       next: data => {
  //         // @ts-ignore
  //         this.reservations = data
  //         console.log(data)
  //       },
  //       error: err => {
  //         console.error(err);
  //       }
  //     });
  // }


}
