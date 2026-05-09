import { Component, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../shared/gallery-callout/gallery-callout';
import { SeoService } from '../../../service/seo.service';
import { Faq } from "../../../shared/faq/faq";

@Component({
  selector: 'app-shower-floors-and-bases',
  imports: [RouterLink, PageHero, GalleryCallout, Faq],
  templateUrl: './shower-floors-and-bases.html',
  styleUrl: './shower-floors-and-bases.scss',
})
export class ShowerFloorsAndBases {
  @ViewChild('basesTrack') trackRef!: ElementRef<HTMLElement>;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    inject(SeoService).set({
      title: 'Shower Floors & Bases',
      description:
        'Complete your shower with precision-engineered New Bath Expo bases — zero-threshold, modular, custom, and standard options designed to pair seamlessly with our wall systems. Monterey Peninsula.',
      keywords:
        'shower base, shower floor, zero threshold shower, custom shower base, shower remodel monterey, New Bath Expo shower base, accessible shower',
      canonical: '/products/shower-floors-and-bases',
      ogImage: 'https://www.newbathexpo.com/assets/baths/8.jpg',
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
