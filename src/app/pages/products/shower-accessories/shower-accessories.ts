import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../shared/gallery-callout/gallery-callout';
import { ContentService, Accessory } from '../../../service/content';
import { SeoService } from '../../../service/seo.service';

@Component({
  selector: 'app-shower-accessories',
  imports: [RouterLink, PageHero, GalleryCallout],
  templateUrl: './shower-accessories.html',
  styleUrl: './shower-accessories.scss',
})
export class ShowerAccessories {
  private contentService = inject(ContentService);

  accessories = this.contentService.accessories;
  lightboxIndex = signal<number | null>(null);

  constructor() {
    inject(SeoService).set({
      title: 'Shower Accessories',
      description:
        'Discover our full range of shower accessories — corner shelves, recessed caddies, corner seats, grab bars, and premium trim to personalize your new bathroom on the Monterey Peninsula.',
      keywords:
        'shower accessories, shower shelf, corner seat shower, shower caddy, recessed shower caddy, shower grab bar, shower trim monterey',
      canonical: '/products/shower-accessories',
      ogImage: 'https://www.newbathexpo.com/assets/baths/6.jpg',
    });
  }

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
  }

  closeLightbox() {
    this.lightboxIndex.set(null);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    const current = this.lightboxIndex();
    if (current !== null) {
      this.lightboxIndex.set((current + 1) % this.accessories.length);
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    const current = this.lightboxIndex();
    if (current !== null) {
      this.lightboxIndex.set((current - 1 + this.accessories.length) % this.accessories.length);
    }
  }
}
