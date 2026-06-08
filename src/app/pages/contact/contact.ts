import { Component, inject } from '@angular/core';
import { LeadSheetForm } from '../../shared/lead-sheet-form/lead-sheet-form';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-contact',
  imports: [LeadSheetForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor() {
    inject(SeoService).set({
      title: 'Contact Us | New Bath Expo',
      description:
        'Request a free in-home consultation for your bathroom remodel. Tell us about your project and our team will be in touch within 1 business day.',
      keywords:
        'bathroom remodel consultation, contact New Bath Expo, free bathroom estimate, bathroom renovation quote',
      canonical: '/contact',
      ogImage: 'https://www.newbathexpo.com/assets/portfolio/luxurious-retreat.jpg',
    });
  }
}
