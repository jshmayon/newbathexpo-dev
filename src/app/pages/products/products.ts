import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, PageHero],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products {
  constructor() {
    inject(SeoService).set({
      title: 'Shower Products & Materials',
      description:
        'Explore our full range of bathroom products — Sentrel shower wall panels, shower bases, accessories, and custom trim. Premium materials for your next remodel on the Monterey Peninsula.',
      keywords:
        'sentrel shower wall panels, shower base options, shower accessories, bathroom remodel products monterey, shower materials california',
      canonical: '/products',
      ogImage: 'https://www.newbathexpo.com/assets/baths/4.jpg',
    });
  }
}
