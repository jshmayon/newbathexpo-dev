import { Component, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../shared/gallery-callout/gallery-callout';
import { SeoService } from '../../../service/seo.service';
import { Faq } from "../../../shared/faq/faq";

@Component({
  selector: 'app-shower-wall-systems',
  imports: [RouterLink, PageHero, GalleryCallout, Faq],
  templateUrl: './shower-wall-systems.html',
  styleUrl: './shower-wall-systems.scss',
})
export class ShowerWallSystems {
  @ViewChild('featuresTrack') trackRef!: ElementRef<HTMLElement>;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    inject(SeoService).set({
      title: 'Shower Wall Systems',
      description:
        'Upgrade your bathroom with New Bath Expo shower wall panels — waterproof, grout-free, and installed in as little as one day. Choose from dozens of colors and textures. Serving the Monterey Peninsula.',
      keywords:
        'shower wall panels, New Bath Expo wall system, waterproof shower walls, grout-free shower, bathroom wall panels monterey, shower panel installation',
      canonical: '/products/shower-wall-systems',
      ogImage: 'https://www.newbathexpo.com/assets/baths/1.jpg',
    });
  }

  scroll(dir: 'prev' | 'next') {
    if (!isPlatformBrowser(this.platformId)) return;
    const track = this.trackRef.nativeElement;
    const card = track.querySelector('.feature-card') as HTMLElement;
    const amount = card ? card.offsetWidth + 20 : 300;
    track.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  }
}
