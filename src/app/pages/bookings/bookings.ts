import { Component, inject } from '@angular/core';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-bookings',
  imports: [BookingForm, PageHero],
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss',
})
export class Bookings {
  constructor() {
    inject(SeoService).set({
      title: 'Book a Free Bathroom Consultation',
      description:
        'Ready to transform your bathroom? Request a free consultation with New Bath Expo. We serve Pacific Grove, Monterey, Carmel, Salinas, and the surrounding Monterey Peninsula.',
      keywords:
        'bathroom remodel consultation, free bathroom quote, schedule bathroom remodel monterey, bathroom contractor pacific grove, free estimate shower remodel',
      canonical: '/bookings',
      ogImage: 'https://www.newbathexpo.com/assets/portfolio/luxurious-retreat.jpg',
    });
  }
}
