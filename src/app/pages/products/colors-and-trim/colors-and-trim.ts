import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../shared/gallery-callout/gallery-callout';
import { SeoService } from '../../../service/seo.service';
import { Faq } from "../../../shared/faq/faq";

@Component({
  selector: 'app-colors-and-trim',
  imports: [RouterLink, PageHero, GalleryCallout, Faq],
  templateUrl: './colors-and-trim.html',
  styleUrl: './colors-and-trim.scss',
})
export class ColorsAndTrim {
  constructor() {
    inject(SeoService).set({
      title: 'Shower Panel Colors & Trim',
      description:
        'Choose from our extensive palette of shower wall panel colors, stone patterns, and trim finishes. Mix and match to create a bathroom that is uniquely yours. Coming soon — full catalog.',
      keywords:
        'shower wall colors, bathroom panel colors, shower trim options, New Bath Expo color palette, stone pattern shower panels, marble shower panels',
      canonical: '/products/colors-and-trim',
      ogImage: 'https://www.newbathexpo.com/assets/baths/12.jpg',
    });
  }
}
