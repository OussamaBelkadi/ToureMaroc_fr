import { Component, OnInit } from '@angular/core';
import { ReservationsService } from "../../Services/reservations/reservations.service";
import { Reservations } from '../../Classes/Reservations/reservations';
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservations[] | null = [];

  constructor(private service: ReservationsService) {}

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {

    this.service.getreservations()
      .subscribe({
        // @ts-ignore
        next: (response: HttpResponse<Reservations[]>) => {
          this.reservations = response.body;
          console.log(response.body);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
