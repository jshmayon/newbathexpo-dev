import { Component, inject } from '@angular/core';
import { DesignRequestForm } from '../../shared/design-request-form/design-request-form';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-design-request',
  imports: [DesignRequestForm, PageHero],
  templateUrl: './design-request.html',
  styleUrl: './design-request.scss',
})
export class DesignRequest {
  constructor() {
    inject(SeoService).set({
      title: 'Request a Custom Bathroom Design',
      description:
        'Tell us your bathroom design preferences — wall design, tiles, bath, sink, faucet, and more. New Bath Expo will craft a custom design tailored to your vision.',
      keywords:
        'custom bathroom design, bathroom design request, tile selection, bathroom remodel design monterey, bath design pacific grove',
      canonical: '/design-request',
      ogImage: 'https://www.newbathexpo.com/assets/portfolio/luxurious-retreat.jpg',
    });
  }
}
