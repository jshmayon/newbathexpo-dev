import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../../shared/page-hero/page-hero';
import { GalleryCallout } from '../../../../shared/gallery-callout/gallery-callout';
import { ProductGallery, GalleryItem } from '../../../../shared/product-gallery/product-gallery';
import { SeoService } from '../../../../service/seo.service';

@Component({
  selector: 'app-simtile',
  imports: [RouterLink, PageHero, GalleryCallout, ProductGallery],
  templateUrl: './simtile.html',
  styleUrl: './simtile.scss',
})
export class Simtile {
  simtileItems: GalleryItem[] = [
    { imageUrl: '/assets/simtile/1_white_pear_10x20_simtile.jpg', label: 'White Pearl 10×20' },
    { imageUrl: '/assets/simtile/2_viencut_gray_10x20_simtile.jpg', label: 'Veincut Gray 10×20' },
    { imageUrl: '/assets/simtile/3_mocha_travertine_10x20_simtile.jpg', label: 'Mocha Travertine 10×20' },
    { imageUrl: '/assets/simtile/4_frost_10x20_simtile.jpg', label: 'Frost 10×20' },
    { imageUrl: '/assets/simtile/5_calacatta_whitee_10x20_simtile.jpg', label: 'Calacatta White 10×20' },
    { imageUrl: '/assets/simtile/6_white_pearl_3x6_simtile.jpg', label: 'White Pearl 3×6' },
    { imageUrl: '/assets/simtile/7_viencut_gray_3x6_simtile.jpg', label: 'Veincut Gray 3×6' },
    { imageUrl: '/assets/simtile/8_mocha_travertine_3x6_simtile.jpg', label: 'Mocha Travertine 3×6' },
    { imageUrl: '/assets/simtile/9_frost_3x6_simtile.jpg', label: 'Frost 3×6' },
    { imageUrl: '/assets/simtile/10_calcatta_white_3x6_simtile.jpg', label: 'Calacatta White 3×6' },
  ];

  constructor() {
    inject(SeoService).set({
      title: 'SimTile | Colors & Trim',
      description:
        'Discover SimTile shower wall panels — the tile look you love, without the grout. Low-maintenance, durable, and beautifully realistic.',
      keywords:
        'simtile shower panels, tile look shower walls, groutless tile shower, new bath expo simtile',
      canonical: '/products/colors-and-trim/simtile',
      ogImage: 'https://www.newbathexpo.com/assets/shower_colors/White-Pearl-Royale-96-10x20-SimTile-edit.png',
    });
  }
}
