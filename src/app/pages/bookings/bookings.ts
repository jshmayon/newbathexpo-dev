import { Component } from '@angular/core';
import { BookingForm } from '../../shared/booking-form/booking-form';

@Component({
  selector: 'app-bookings',
  imports: [BookingForm],
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss',
})
export class Bookings {}
