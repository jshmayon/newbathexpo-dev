import { Component, inject } from '@angular/core';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { DesignRequestForm } from '../../shared/design-request-form/design-request-form';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-book-now',
  imports: [BookingForm, DesignRequestForm, PageHero],
  templateUrl: './book-now.html',
  styleUrl: './book-now.scss',
})
export class BookNow {
  constructor() {
    inject(SeoService).set({
      title: 'Book a Service or Request a Design',
      description:
        'Schedule a free bathroom remodel consultation or submit a custom design request with New Bath Expo. Serving Pacific Grove, Monterey, Carmel, and the Monterey Peninsula.',
      keywords:
        'book bathroom remodel, bathroom design request, free consultation monterey, bathroom contractor pacific grove, custom bathroom design',
      canonical: '/book-now',
      ogImage: 'https://www.newbathexpo.com/assets/portfolio/luxurious-retreat.jpg',
    });
  }
}
